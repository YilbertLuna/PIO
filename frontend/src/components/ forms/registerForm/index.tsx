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
            }
        })

        await res.json()

        if(res.status === 403) setErr(true)
        
        if(res.ok) router.push('/')

    })

    return(
        <div className={` ${!active ? 'w-0' : 'w-full'} flex flex-col justify-center items-center left-0 rigth-90 transition-all duration-300`}>
            <form onSubmit={onSubmit} className={`${active ? '' : 'hidden'} flex flex-col space-y-10`}>

                
                <div className="flex flex-col">
                    <Input type="text" placeholder="Enter name"  {...register("name", {
                        required: true
                    })}/>
                    {errors.name && <span className="text-red-600">The name is required</span>}
                </div>

               <div className="flex flex-col">
                <Input type="text" placeholder="Enter email" {...register("email", {
                        required: true
                    })}/>
                    {errors.email && <span className="text-red-600">The email is required</span>}
               </div>

                <div className="flex flex-col">
                    <Input type="text" placeholder="Enter password" {...register("password", {
                        required: true
                    })}/>
                    {errors.password && <span className="text-red-600">The password is required</span>}
                </div>

                {err && <span className="text-center font-semibold text-slate-500">The email is already in use</span>}

                <button type="submit" className="bg-color2 rounded-3xl p-4 font-medium text-xl">Sing up</button>
            </form>
        </div>
    )
}