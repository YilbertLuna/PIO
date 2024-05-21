'use client'

import Image from "next/image"
import { Timeline, Divider } from 'keep-react'
import { FiHeart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

export default function Profile(): JSX.Element {
    return(
        <div className="flex flex-col justify-center items-center mt-12 space-y-10 md:ml-40">
            
            <div className="fixed right-5 top-7 md:hidden">
                <FiMenu className="text-2xl"/>
            </div>
           
            <div className="flex flex-col w-full justify-center items-center space-y-4">
                <div className="flex flex-row w-96 md:w-[400px] lg:w-[600px] justify-between items-center">
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
            
            <div className="flex flex-col space-y-5">
                <Timeline className='ml-4'>
                  <Timeline.Item>
                    <Timeline.Content>
                      <div className='flex flex-row gap-4'>
                        <Image src="/FotoPerfil.jpg" alt="PIO logo" width={30} height={30} className='rounded-full' />
                        <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                      </div>
                        <p className="text-body-4 font-normal text-metal-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                      </p>
                      <div className='flex flex-row items-center gap-2'>
                        <FiHeart className='hover:text-red-600'/> <p>0</p>
                      </div>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>

                <Divider className='my-4'/>

                 <Timeline className='ml-4'>
                    <Timeline.Item>
                      <Timeline.Content>
                          <div className='flex flex-row gap-4'>
                            <Image src="/FotoPerfil.jpg" alt="PIO logo" width={30} height={30} className='rounded-full' />
                            <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                          </div>
                            <p className="text-body-4 font-normal text-metal-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                          </p>
                          <div className='flex flex-row items-center gap-2'>
                            <FiHeart className='hover:text-red-600'/> <p>0</p>
                          </div>
                      </Timeline.Content>
                    </Timeline.Item>
                  </Timeline>

                <Divider className='my-4'/>

                 <Timeline className='ml-4'>
                    <Timeline.Item>
                      <Timeline.Content>
                        <div className='flex flex-row gap-4'>
                          <Image src="/FotoPerfil.jpg" alt="PIO logo" width={30} height={30} className='rounded-full' />
                          <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                        </div>
                          <p className="text-body-4 font-normal text-metal-600">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                        </p>
                        <div className='flex flex-row items-center gap-2'>
                          <FiHeart className='hover:text-red-600'/> <p>0</p>
                        </div>
                      </Timeline.Content>
                    </Timeline.Item>
                  </Timeline>

                <Divider className='my-4'/>

                 <Timeline className='ml-4'>
                    <Timeline.Item>
                      <Timeline.Content>
                        <div className='flex flex-row gap-4'>
                          <Image src="/FotoPerfil.jpg" alt="PIO logo" width={30} height={30} className='rounded-full' />
                          <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                        </div>
                          <p className="text-body-4 font-normal text-metal-600">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                        </p>
                        <div className='flex flex-row items-center gap-2'>
                          <FiHeart className='hover:text-red-600'/> <p>0</p>
                        </div>
                      </Timeline.Content>
                    </Timeline.Item>
                  </Timeline>

                <Divider className='my-4'/>

                 <Timeline className='ml-4'>
                    <Timeline.Item>
                      <Timeline.Content>
                        <div className='flex flex-row gap-4'>
                          <Image src="/FotoPerfil.jpg" alt="PIO logo" width={30} height={30} className='rounded-full' />
                          <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                        </div>
                          <p className="text-body-4 font-normal text-metal-600">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                        </p>
                        <div className='flex flex-row items-center gap-2'>
                          <FiHeart className='hover:text-red-600'/> <p>0</p>
                        </div>
                      </Timeline.Content>
                    </Timeline.Item>
                  </Timeline>
            </div>
        </div>
    )
}