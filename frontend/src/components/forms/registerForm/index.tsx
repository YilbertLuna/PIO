'use client'

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/Input"

type props = {
    active: boolean
}

export default function Register({active}: props) {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const [err, setErr] = useState(false)
    const router = useRouter()

    const onSubmit = handleSubmit( async (data) => {
        const res = await fetch('http://localhost:6060/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        await res.json()

        if(res.status === 403) setErr(true)
        
        if(res.ok) router.push('/')

        router.refresh()

    })

    return(
        <div className={` ${!active ? 'w-0' : 'w-full'} flex flex-col justify-center items-center left-0 rigth-90 transition-all duration-300`}>
            <form onSubmit={onSubmit} className={`${active ? '' : 'hidden'} flex flex-col space-y-2 py-10`}>

                {err && <span className="text-center font-semibold text-slate-500">The email is already in use</span>}
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        User name
                    </label>
                    <div className="mt-2">
                        <Input
                        type="text"
                        {...register("name", {
                            required: true
                        })}
                        />
                    </div>
                    {errors.email && <p className="text-red-600">email is required</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <Input
                        type="text"
                        {...register("email", {
                            required: true
                        })}
                        />
                    </div>
                    {errors.email && <p className="text-red-600">email is required</p>}
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <Input
                        type="text"
                        {...register("password", {
                            required: true
                        })}
                        />
                    </div>
                    {errors.password && <p className="text-red-600">password is required</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-80 justify-center rounded-md bg-color2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-color3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>

            </form>
        </div>
    )
}