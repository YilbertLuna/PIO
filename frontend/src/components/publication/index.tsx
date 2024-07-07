'use client'

import { useForm } from "react-hook-form"
import { useState } from "react"
import { textArea } from "@/interface"

export function CreatePost() {
    
    const { register, handleSubmit, formState: {errors} } = useForm<textArea>()
    const [typeError, setTypeError] = useState<[string]>([''])

    const onSubmit = handleSubmit( async (data) => {
        const res = await fetch('http://localhost:6060/api/createPublication', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            redirect: 'manual'
        })

        const response = await res.json()

        if(res.status === 403) setTypeError(response.error)

        if(res.ok) window.location.reload()
    })

    return(
            <form onSubmit={
                    onSubmit
                }>
                <div className="flex flex-col">
                    <textarea
                        {...register('publication', {
                            required: {
                                value: true,
                                message: 'Please enter message'
                            }
                        })}
                        className="w-72 h-10 rounded-md focus:outline-none p-2"
                    />

                    {typeError?.map((error, i) => (
                        <p className="font-semibold text-red-600 text-center" key={i}>{error}</p>
                    ))}
                </div>
                {errors.publication && <p className="text-red-600">{errors.publication?.message}</p>}

                <button type="submit"  className="mt-4 w-full bg-color2 px-4 py-2 text-sm font-semibold leading-6 text-white rounded-md hover:bg-color3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Create Post
                </button>
            </form>
    )
}