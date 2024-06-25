'use client'

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { FiSearch } from "react-icons/fi";

import { User } from "@/interface"


export default function Explore(): JSX.Element {

    const [users, setUsers] = useState<User[]>([])
    const [foundUsers, setFoundUsers] = useState<User[]>([])
    const [search, setSearch] = useState<string>()
    const [isOk, setIsOk] = useState<boolean>(false)
    const [empiti, setEmpiti] = useState<boolean>(false)
    const searchUserRef = useRef<HTMLInputElement>(null)

    function submitInputValue() {
        if(searchUserRef.current?.value.trim() === '' || searchUserRef.current?.value === undefined) {
            setEmpiti(true)
            setIsOk(false)
            return
        }

        setSearch(String(searchUserRef.current?.value))
        setIsOk(true)
        setEmpiti(false)
        
    }

    useEffect(() => {

        async function getUsers() {
            const res = await fetch('http://localhost:6060/api/getUsers')
            const data = await res.json()
            
            if(res.status === 200) {
                setUsers(data)
                return
            }

        }

        getUsers()
        
        setFoundUsers(users.filter(user => user.name.includes(`${search}`)))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return(
        <main className="flex flex-col justify-center items-center space-y-10 md:ml-40 ml-4 mr-4 mt-20">

            <div className="flex justify-center items-center mt-10">
                <form onSubmit={
                    e => {
                        e.preventDefault()
                        submitInputValue()
                    }
                } className="h-10 w-72 bg-white rounded-xl">
                    <div className="flex flex-row justify-center items-center gap-3">
                        <input ref={searchUserRef} placeholder="search user"
                        className="px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 focus:outline-none" />
                        <button type="submit" className="bg-button text-black p-2 rounded-lg text-base focus:outline-none"><FiSearch /></button>
                    </div>
                </form>
            </div>

            {empiti && <p className="font-semibold text-red-600 text-center">Enter user</p>}

            {isOk && <div className="flex flex-col justify-center items-center w-80 sm:w-[460px] space-y-5 shadow-md p-10 rounded-xl bg-clip-border bg-color1">
                {foundUsers.length === 0 && <p className="font-semibold text-red-600 text-center">User not found</p>}
              
                {foundUsers?.map(users => (
                    <div key={users.id} className="flex flex-row justify-start items-center w-72 space-x-10 px-10">
                        <figure>
                            <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                        </figure>

                        <h1 className="text-start">{users.name}</h1>
                    </div>
                ))}
            </div>}
        </main>
    )
}