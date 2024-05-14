import Input from "@/components/Input"

type props = {
    active: boolean
}

export default function Register({active}: props) {
    
    return(
        <div className={` ${!active ? 'w-0' : 'w-full'} flex flex-col justify-center items-center left-0 rigth-90 transition-all duration-300`}>
            <form onClick={e => e.preventDefault()} className={`${active ? '' : 'hidden'} flex flex-col space-y-10`}>

                <Input type="text" name="email" placeholder="User name"/>

                <Input type="text" name="email" placeholder="Email address"/>

                <Input type="password" name="password" placeholder="Password" />

                <button type="submit" className="bg-color2 rounded-3xl p-4 font-medium text-xl">Sing up</button>
            </form>
        </div>
    )
}