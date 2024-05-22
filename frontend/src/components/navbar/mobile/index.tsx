'use client'

import Link from "next/link";
import { FiHome, FiSearch, FiHeart, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";
import ModalComponent from "@/components/modal";

export default function NavBarMovile(): JSX.Element {

  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-between items-center fixed bottom-0 w-full bg-color3 py-7 px-4 text-white text-3xl mr-4">
      <Link href="/" className={`${pathname === '/' ? 'text-white' : 'text-slate-400'}`}>
          <FiHome />
      </Link>
      <Link href="/explore" className={`${pathname === '/explore' ? 'text-white' : 'text-slate-400'}`}>
          <FiSearch />
      </Link>

      <ModalComponent />
      
      <Link href='/notifications' className={`${pathname === '/notifications' ? 'text-white' : 'text-slate-400'}`}>
          <FiHeart />
      </Link>

      <Link href="/profile" className={`${pathname === '/profile' ? 'text-white' : 'text-slate-400'}`}>
          <FiUser />
      </Link>
    </nav>
  )
};