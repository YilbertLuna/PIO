import Image from "next/image"
import { Divider } from "keep-react"

export default function Notifications(): JSX.Element {
    return(
        <div className="flex justify-center items-center w-full">

            <div className="flex flex-col md:ml-40 space-y-10 mt-11">
                <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="flex flex-row justify-start items-center gap-5">
                        <figure>
                            <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                        </figure>
                        <h1>Yilbert Luna</h1>
                    </div>
                    <p>ah dado like a tu publicaicon</p>
                </div>

                <Divider />

                <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="flex flex-row justify-start items-center gap-5">
                        <figure>
                            <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                        </figure>
                        <h1>Yilbert Luna</h1>
                    </div>
                    <p>ah dado like a tu publicaicon</p>
                </div>

                <Divider />

                <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="flex flex-row justify-start items-center gap-5">
                        <figure>
                            <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                        </figure>
                        <h1>Yilbert Luna</h1>
                    </div>
                    <p>ah dado like a tu publicaicon</p>
                </div>

                <Divider />

                <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="flex flex-row justify-start items-center gap-5">
                        <figure>
                            <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                        </figure>
                        <h1>Yilbert Luna</h1>
                    </div>
                    <p>ah dado like a tu publicaicon</p>
                </div>

                <Divider />

                <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="flex flex-row justify-start items-center gap-5">
                        <figure>
                            <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                        </figure>
                        <h1>Yilbert Luna</h1>
                    </div>
                    <p>ah dado like a tu publicaicon</p>
                </div>

                <Divider />

                <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="flex flex-row justify-start items-center gap-5">
                        <figure>
                            <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                        </figure>
                        <h1>Yilbert Luna</h1>
                    </div>
                    <p>ah dado like a tu publicaicon</p>
                </div>

                <Divider />

                <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="flex flex-row justify-start items-center gap-5">
                        <figure>
                            <Image src="/FotoPerfil.jpg" alt="foto perfil" width={50} height={50} className="rounded-full"/>
                        </figure>
                        <h1>Yilbert Luna</h1>
                    </div>
                    <p>ah dado like a tu publicaicon</p>
                </div>
            </div>
        </div> 
    )
}