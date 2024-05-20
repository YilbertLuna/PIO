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
        
        <main className="flex flex-col md:flex-row items-center justify-between h-dvh bg-gradient-to-b from-gradient1 from-5% to-gradient2 to-90%">     
            <figure className="mt-11 md:mt-0 md:ml-24 xl:ml-[300px] 2xl:ml-[500px]">
                <Image src="/PIO.png" alt="PIO logo" width={131} height={98} className="md:w-60"/>
            </figure>

            <div className={`flex flex-col w-full md:justify-center md:itmes-center md:w-[500px] lx:w-[800px] md:h-full bg-color1 py-7 md:py-0 space-y-12 rounded-t-[30px] md:rounded-none`}>
                
                <div className="flex justify-center items-center">
                    <div className="flex flex-row justify-between items-center w-80 bg-color2 rounded-3xl py-5 px-8">
                        <div onClick={isLogin}>
                            <p className={` ${!isActive ? 'underline underline-offset-8' : ''} font-semibold text-xl text-center`}>login</p>
                        </div>

                        <div onClick={isRegister}>
                            <p className={` ${isActive ? 'underline underline-offset-4' : ''} font-semibold text-xl text-center`}>register</p>
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