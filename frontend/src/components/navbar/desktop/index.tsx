'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FiHome, FiSearch, FiHeart, FiUser } from "react-icons/fi";
import { Sidebar, Divider } from 'keep-react'
import ModalComponent from '@/components/modal';
import ButtonLogout from '@/components/logout';

export default function NavBarDesktop(): JSX.Element {

    const pathname = usePathname();

    return (
        <Sidebar className="rounded-none border-r border-black bg-color3">
            <Sidebar.Body className='flex flex-col justify-center items-start space-y-7'>
                <Sidebar.Item>
                    <Link href="/" className={`${pathname === '/' ? 'text-white' : 'text-slate-400'} flex items-center gap-2 `}>
                        <FiHome className='text-3xl' />
                        Home
                    </Link>
                </Sidebar.Item>
                
                <Sidebar.Item>
                    <Link href="/explore" className={`${pathname === '/explore' ? 'text-white' : 'text-slate-400'} flex items-center gap-2 `}>
                       <FiSearch className='text-3xl' />
                       Search
                    </Link>
                </Sidebar.Item>

                <Sidebar.Item>
                    <span className='flex items-center gap-2 text-slate-400 '>
                        <span className='text-3xl'>
                            <ModalComponent />
                        </span>
                        New post
                    </span>
                </Sidebar.Item>
                
                <Sidebar.Item>
                    <Link href="/notifications" className={`${pathname === '/notifications' ? 'text-white' : 'text-slate-400'} flex items-center gap-2 `}>
                        <FiHeart className='text-3xl' />
                        notifications
                    </Link>
                </Sidebar.Item>
            </Sidebar.Body>

            <Divider className="my-4" />
            
            <Sidebar.Footer className="flex flex-col justify-between items-start gap-2">
                <Sidebar.Item>
                    <Link href="/profile" className={`${pathname === '/profile' ? 'text-white' : 'text-slate-400'} flex items-center gap-2 `}>
                        <FiUser className='text-3xl' />
                        Profile
                    </Link>
                </Sidebar.Item>

                <Sidebar.Item>
                    {/* <Link href="/login" className={`${pathname === '/login'? 'text-white' : 'text-slate-400'} flex items-center gap-2 `}>
                        <ButtonLogout />
                    </Link> */}
                    <ButtonLogout />
                </Sidebar.Item>
            </Sidebar.Footer>
        </Sidebar>
    )
}