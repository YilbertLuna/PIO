import Image from "next/image"
import { Divider } from "keep-react"

export default function Explore(): JSX.Element {
    return(
        <main className="flex flex-col justify-center items-center w-full space-y-28">

            <div className="w-72 mt-10">
                <div className="relative h-10 w-full min-w-[200px] md:ml-20 ">
                    <input type="email" placeholder="search user"
                    className="peer h-full w-full rounded-[7px] !border !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
                </div>
            </div>


            <div className="flex flex-col md:ml-40 space-y-10">
                <div className="flex flex-row justify-between items-center w-72 ">
                    <figure>
                        <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                    </figure>
                    <h1>Yilbert Luna</h1>

                    <button 
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-color3 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20  focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">Button</button>
                </div>

                <Divider />

                <div className="flex flex-row justify-between items-center w-72 ">
                    <figure>
                        <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                    </figure>
                    <h1>Yilbert Luna</h1>

                    <button 
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-color3 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20  focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">Button</button>
                </div>

                <Divider />

                <div className="flex flex-row justify-between items-center w-72 ">
                    <figure>
                        <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                    </figure>
                    <h1>Yilbert Luna</h1>

                    <button 
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-color3 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20  focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">Button</button>
                </div>

                <Divider />

                <div className="flex flex-row justify-between items-center w-72 ">
                    <figure>
                        <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                    </figure>
                    <h1>Yilbert Luna</h1>

                    <button 
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-color3 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20  focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">Button</button>
                </div>

                <Divider />

                <div className="flex flex-row justify-between items-center w-72 ">
                    <figure>
                        <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                    </figure>
                    <h1>Yilbert Luna</h1>

                    <button 
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-color3 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20  focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">Button</button>
                </div>

                <Divider />

                <div className="flex flex-row justify-between items-center w-72 ">
                    <figure>
                        <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                    </figure>
                    <h1>Yilbert Luna</h1>

                    <button 
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-color3 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20  focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">Button</button>
                </div>

                <Divider />

                <div className="flex flex-row justify-between items-center w-72 ">
                    <figure>
                        <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                    </figure>
                    <h1>Yilbert Luna</h1>

                    <button 
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-color3 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20  focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">Button</button>
                </div>
            </div>

        </main>
    )
}