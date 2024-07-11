'use client'

import { useForm } from "react-hook-form"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

import { Input,  } from "@/components/Input"
import { Inputs, textArea, User } from "@/interface"

export function EditProfileForm() {
    const [user, setUser] = useState<User>()
    const {register, handleSubmit} = useForm<Inputs | textArea>()
    const router = useRouter()

    useEffect(() => {
        const getUserData = async() => {
            const res = await fetch('http://localhost:6060/api/profile', {
                credentials: 'include'
            })

            if(res.ok) {
                const userData = await res.json()
                setUser(userData)
            }
        }

        getUserData()
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch('http://localhost:6060/api/updateUser', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        await res.json()

        if(res.ok) router.push('/profile')

    })

    return(
        <form className=" flex flex-col justify-center items-center space-y-5" onSubmit={onSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    User name
                </label>
                <div className="mt-2">
                    <Input
                    type="text"
                    {...register("name")}
                    placeholder={user?.name}
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="bio">
                    Bio
                </label>
                <textarea {...register("bio")}
                placeholder={user?.bio}
                className="block w-80 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"/>
            </div>
            <div className="flex flex-col space-y-5">
                <button
                    type="submit"
                    className="flex justify-center rounded-md bg-color2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-color3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Update Profile
                </button>
                <Link href={'/profile'}
                    className="flex justify-center rounded-md bg-color2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-color3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    back
                </Link>
            </div>
        </form>
    )
}