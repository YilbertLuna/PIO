'use client'

import Image from "next/image"
import { FiHeart } from "react-icons/fi";

export default function Profile(): JSX.Element {
    return(
        <div className="flex flex-col space-y-10 md:ml-40 ml-4 mr-4 mt-20">
           
            <div className="flex flex-col w-full justify-center items-center space-y-4">
                <div className="flex flex-row w-full md:w-[400px] lg:w-[600px] justify-between items-center">
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-xl font-medium">Yilbert Luna</p>
                        <p className="text-lg font-medium">Frontend Developer</p>
                    </div>
                    
                    <figure>
                        <Image src="/FotoPerfil.jpg" alt="PIO logo" width={100} height={100} className="rounded-full"/>
                    </figure>
                </div>

                <div className="flex flex-row justify-center items-center w-full space-x-11">
                    <p>Followers 0</p>
                    <p>Following 0</p>
                </div>

                <span className="bg-color2 rounded-xl p-4 text-lg font-semibold">edit profile</span>
            </div>
            
            <div className="flex flex-col justify-center items-center w-full space-y-5 ">
              <div className="w-full md:w-96 lg:w-[460px]">
                <div className="relative flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <Image src="/FotoPerfil.jpg" alt="PIO logo" width={50} height={50} className='rounded-full' />      
                    <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">Yilbert Luna | Mayo-21-2024 </h5>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-600">
                        The key to more success is to have a lot of pillows. Put it this
                        way, it took me twenty five years to get these plants, twenty
                        five years of blood sweat and tears, and Im never giving
                        up, Im just getting started. Im up to something. Fan
                        luv.
                      </p>
                      <div className='flex flex-row items-center gap-3'>
                        <FiHeart className='hover:text-red-500' />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
    )
}