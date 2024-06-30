'use client'

import Image from "next/image"
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";

import { User } from "@/interface";

export default function Profile(): JSX.Element {

    const [userInfo, setUserInfo] = useState<User>()

    useEffect(() => {

      async function getUserInfo() {
        const res = await fetch('http://localhost:6060/api/profile', {
          method: 'GET',
          credentials: 'include',
        })
        const data = await res.json()
        
        if(res.status === 200) {
          setUserInfo(data)
          return
        }
      }

      getUserInfo()

    }, [])

    console.log(userInfo)

    return(
      <div className="flex flex-col justify-center items-center space-y-10 md:ml-40 ml-4 mr-4 mt-28 md:mt-2">
          
          <div className="flex flex-col w-full justify-center items-center space-y-4">
              <div className="flex flex-row w-80 md:w-[400px] mt-11 lg:w-[600px] justify-between items-center">
                  <div className="flex flex-col justify-center items-start space-x-2 space-y-2">
                      <p className="text-xl font-medium">{userInfo?.name}</p>
                      <p className="text-sm font-normal">{userInfo?.bio}</p>
                  </div>
                  
                  <figure>
                      <Image src="/FotoPerfil.jpg" alt="PIO logo" width={100} height={100} className="rounded-full"/>
                  </figure>
              </div>

              <div className="flex flex-row justify-center items-center w-full space-x-11">
                  <p>Followers {userInfo?.followers}</p>
                  <p>Following {userInfo?.followings}</p>
              </div>

              <span className="bg-color2 rounded-xl p-4 text-lg font-semibold">edit profile</span>
          </div>
            
          <div className="flex flex-col justify-center items-center w-80 sm:w-[460px] space-y-5 shadow-md p-10 rounded-xl bg-clip-border bg-color1">
            
            <p>There are no posts</p>
            {/* <div className="relative flex flex-col gap-2">
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
          </div> */}

        </div>

    </div>
  )
}