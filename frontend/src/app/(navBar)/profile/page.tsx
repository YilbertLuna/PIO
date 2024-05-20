'use client'

import Image from "next/image"
import { Timeline, Divider } from 'keep-react'
import { FiMenu } from "react-icons/fi";

export default function Profile(): JSX.Element {
    return(
        <div className="flex flex-col justify-center items-center mt-12 space-y-10">
            
            <div className="fixed right-5 top-7 md:hidden">
                <FiMenu className="text-2xl"/>
            </div>
           
            <div className="flex flex-col w-full justify-center items-center space-y-4 ">
                <div className="flex flex-row w-80 justify-between items-center">
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-xl font-medium">Yilbert Luna</p>
                        <p className="text-lg font-medium">Frontend Developer</p>
                    </div>
                    
                    <figure>
                        <Image src="/FotoPerfil.jpg" alt="PIO logo" width={100} height={100} className="rounded-full"/>
                    </figure>
                </div>

                <span className="bg-color2 rounded-xl p-4 text-lg font-semibold">edit profile</span>
            </div>
            
            <div className="flex flex-col space-y-5 md:ml-40">
                <Timeline className='ml-4'>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                            <p className="text-body-4 font-normal text-metal-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                            </p>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>

                <Divider className='my-4'/>

                <Timeline className='ml-4'>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                            <p className="text-body-4 font-normal text-metal-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                            </p>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>

                <Divider className='my-4'/>

                <Timeline className='ml-4'>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                            <p className="text-body-4 font-normal text-metal-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                            </p>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>

                <Divider className='my-4'/>

                <Timeline className='ml-4'>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                            <p className="text-body-4 font-normal text-metal-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                            </p>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>

                <Divider className='my-4'/>

                <Timeline className='ml-4'>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <p className="leading-[1.4]  text-metal-700 text-xl font-semibold">Yilbert Luna | September 23,2022</p>
                            <p className="text-body-4 font-normal text-metal-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
                            </p>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>

        </div>
    )
}