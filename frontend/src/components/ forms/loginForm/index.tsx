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

    })


    return(
        <div className={` ${active ? 'w-0' : 'w-full'} flex flex-col justify-center items-center left-90 right-0 transition-all duration-300`}>
            <form onSubmit={onSubmit} className={`${active ? 'hidden' : ''} flex flex-col space-y-10`}>

                {err && <span className="text-center font-semibold text-slate-500">{typeError}</span>}

                <div className="flex flex-col space-y-7">
                    
                    <div>
                        <Input type="text" placeholder="Email address" {...register("email", {
                            required: true
                        })}/>
                        {errors.email && <p className="text-red-600">email is required</p>}
                    </div>

                    <div>
                        <Input type="password" placeholder="Password" {...register("password", {
                            required: true
                        })}/>
                        {errors.password && <p className="text-red-600">password is required</p>}
                    </div>

                </div>

                <button type="submit" className="bg-color2 rounded-3xl p-4 font-medium text-xl">log in</button>
            </form>
        </div>
    )
}