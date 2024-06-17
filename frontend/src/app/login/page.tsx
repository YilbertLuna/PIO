'use client'

import Login from "@/components/forms/loginForm"
import Register from "@/components/forms/registerForm"
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
        
        <main className="flex flex-col items-center justify-between sm:justify-center h-dvh md:h-screen bg-gradient-to-b from-gradient1 from-5% to-gradient2 to-90%">     
            <figure className="mt-20 md:mt-0">
                <Image src="/PIO.png" alt="PIO logo" width={131} height={98} className="md:w-60"/>
            </figure>

            <div className="flex flex-col w-full justify-center sm:w-[500px] bg-color1 py-7 space-y-12 rounded-t-[30px] sm:rounded-3xl">
                
                <div className="flex justify-center items-center">
                    <div className="flex flex-row justify-between items-center w-80 bg-color2 rounded-3xl py-5 px-8">
                        <div onClick={isLogin}>
                            <p className={` ${!isActive ? 'underline underline-offset-8' : ''} font-semibold text-xl text-center`}>login</p>
                        </div>

                        <div onClick={isRegister}>
                            <p className={` ${isActive ? 'underline underline-offset-8' : ''} font-semibold text-xl text-center`}>register</p>
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