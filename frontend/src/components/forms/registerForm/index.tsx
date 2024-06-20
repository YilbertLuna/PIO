'use client'

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/Input"

import { Inputs } from "@/interface"

type props = {
    active: boolean
}

export default function Register({active}: props) {

    const { register, handleSubmit, formState: {errors} } = useForm<Inputs>()
    const [typeError, setTypeError] = useState<[string]>([''])
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

        const response = await res.json()

        if(res.status === 403) setTypeError(response.error)
        
        if(res.ok) router.push('/')

        router.refresh()

    })

    return(
        <div className={` ${!active ? 'w-0' : 'w-full'} flex flex-col justify-center items-center left-0 rigth-90 transition-all duration-300`}>
            <form onSubmit={onSubmit} className={`${active ? '' : 'hidden'} flex flex-col space-y-5`}>

                {typeError?.map((error, i) => (
                    <p className="font-semibold text-red-600 text-center" key={i}>{error}</p>
                ))}

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        User name
                    </label>
                    <div className="mt-2">
                        <Input
                        type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Please enter your name"
                            }
                        })}
                        />
                    </div>
                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <Input
                        type="text"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Please enter your email address"
                            }
                        })}
                        />
                    </div>
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
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
                            required: {
                                value: true,
                                message: "Please enter your password"
                            }
                        })}
                        />
                    </div>
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
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