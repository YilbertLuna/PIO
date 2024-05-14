'use client'

import Login from "@/components/ forms/loginForm"
import Register from "@/components/ forms/registerForm"
import Image from "next/image"
import { useState } from "react"

export default function Page() {
    
    const [isActive, setIsActive] = useState(false)

    const isLogin = () => {
        if(isActive === true) setIsActive(false)
    }
    
    const isRegister = () => {
        if(isActive === false) setIsActive(true)
    }

    return(
        
        <main className="flex flex-col items-center justify-between h-screen bg-gradient-to-b from-gradient1 from-13% to-gradient2 to-87%">
        
            <div className="mt-24">
                <Image src="/PIO.png" alt="PIO logo" width={131} height={98}/>
            </div>

            <div className={`flex flex-col w-full bg-color1 py-7 space-y-12 rounded-t-[30px] min-h-screen fixed top-[335px]`}>
                
                <div className="flex justify-center items-center">
                    <div className="flex flex-row justify-between items-center w-80 bg-color2 rounded-3xl py-5 px-8">
                        <div onClick={isLogin}>
                            <p className={` ${!isActive ? 'underline underline-offset-8' : ''} font-semibold text-2xl text-center`}>login</p>
                        </div>

                        <div onClick={isRegister}>
                            <p className={` ${isActive ? 'underline underline-offset-4' : ''} font-semibold text-2xl text-center`}>register</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Login active={isActive} />
                    <Register active={isActive} />
                </div>

            </div>

        </main>
    )
}