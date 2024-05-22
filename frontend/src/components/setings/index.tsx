import Image from "next/image"
import { FiAlignRight } from "react-icons/fi";

export default function Setings() {
    return(
        <div className="flex flex-row top-2 fixed w-[100%] justify-center items-center">
            <div className="flex justify-between items-center w-[50%] bg-color3  rounded-3xl p-4 text-center">
                <figure className="flex justify-center items-center">
                    <Image src="/PIO_Blanco.png" alt="PIO logo" width={50} height={50} />
                </figure>

                <div className="flex justify-center items-center mr-4">
                    <FiAlignRight className="text-3xl"/>
                </div>
            </div>
        </div>
    )
}