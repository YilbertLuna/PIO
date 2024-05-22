import Image from "next/image"

export default function Notifications(): JSX.Element {
    return(
        <div className="flex flex-col space-y-10 md:ml-40 ml-4 mr-4 mt-14">

            <div className="flex flex-col justify-center items-center w-full space-y-5">

                <div className="flex flex-col justify-center items-center w-full md:w-96 lg:w-[460px] space-y-8">
                    <div className="flex flex-row justify-center items-center gap-2 w-full">
                        <div className="flex flex-col w-full justify-center items-center gap-3">
                            <div className="flex justify-center items-center gap-1">
                                <Image src="/FotoPerfil.jpg" alt="PIO logo" width={50} height={50} className='rounded-full' />      
                                <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">Yilbert Luna</h5>
                            </div>
                            <div className="flex">
                                <p>Dio like a tu publicacion</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                        <div className="flex flex-col w-full justify-center items-center gap-3">
                            <div className="flex justify-center items-center gap-1">
                                <Image src="/FotoPerfil.jpg" alt="PIO logo" width={50} height={50} className='rounded-full' />      
                                <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">Yilbert Luna</h5>
                            </div>
                            <div className="flex">
                                <p>Dio like a tu publicacion</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                        <div className="flex flex-col w-full justify-center items-center gap-3">
                            <div className="flex justify-center items-center gap-1">
                                <Image src="/FotoPerfil.jpg" alt="PIO logo" width={50} height={50} className='rounded-full' />      
                                <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">Yilbert Luna</h5>
                            </div>
                            <div className="flex">
                                <p>Dio like a tu publicacion</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                        <div className="flex flex-col w-full justify-center items-center gap-3">
                            <div className="flex justify-center items-center gap-1">
                                <Image src="/FotoPerfil.jpg" alt="PIO logo" width={50} height={50} className='rounded-full' />      
                                <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">Yilbert Luna</h5>
                            </div>
                            <div className="flex">
                                <p>Dio like a tu publicacion</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div> 
    )
}