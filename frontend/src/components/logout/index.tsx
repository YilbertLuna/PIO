'use client'

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

export default function ButtonLogout () {
    const { handleSubmit }= useForm()
    const router = useRouter()

    const onSubmit = handleSubmit( async () => {
        const res = await fetch('http://localhost:6060/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        router.push('/login')
        router.refresh()

    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <button>
                    Log out
                </button>
            </form>
        </div>
    )
}