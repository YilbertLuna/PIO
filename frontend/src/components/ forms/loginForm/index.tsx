'use client'

type props = {
    active: boolean,
}

import { Input } from "@/components/Input"

export default function Login( {active}: props ) {

    return(
        <div className={` ${active ? 'w-0' : 'w-full'} flex flex-col justify-center items-center left-90 right-0 transition-all duration-300`}>
            <form onClick={e => { e.preventDefault() }} className={`${active ? 'hidden' : ''} flex flex-col space-y-20`}>

                <Input type="text" name="email" placeholder="Email address"/>        

                <Input type="password" name="password" placeholder="Password" />

                <button type="submit" className="bg-color2 rounded-3xl p-4 font-medium text-xl">log in</button>
            </form>
        </div>
    )
}