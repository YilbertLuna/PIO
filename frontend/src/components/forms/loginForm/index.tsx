'use client'

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/Input"


type props = {
    active: boolean,
}

export default function Login( {active}: props ) {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const [err, setErr] = useState(false)
    const [typeError, serTypeError] = useState()
    const router = useRouter()

    const onSubmit = handleSubmit( async (data) => {
        const res = await fetch('http://localhost:6060/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        const result = await res.json()

        if(res.status === 400){
            setErr(true)
            serTypeError(result.error)
        }
        if(res.ok) router.push('/')

        router.refresh()

    })


    return(
        
        <div className={` ${active ? 'w-0' : 'w-full'} flex flex-col justify-center items-center left-90 right-0 transition-all duration-300`}>
            <form className={`${active ? 'hidden' : ''} flex flex-col space-y-10`} onSubmit={onSubmit}>
                {err && <span className="text-center font-semibold text-slate-500">{typeError}</span>}

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <Input
                        id="email"
                        {...register("email", {
                            required: true
                        })}/>
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
                        id="password"
                        type="password"
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