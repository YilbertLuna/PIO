'use client'

import Link from "next/link";
import { FiHome, FiSearch, FiPlusCircle, FiHeart, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function NavBarMovile(): JSX.Element {

  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-center items-center fixed bottom-0 w-full bg-color3 py-7 px-4 gap-14 text-white text-3xl">
      <Link href="/" className={`${pathname === '/' ? 'text-white' : 'text-slate-400'}`}>
          <FiHome />
      </Link>
      <Link href="/explore" className={`${pathname === '/explore' ? 'text-white' : 'text-slate-400'}`}>
          <FiSearch />
      </Link>

      <Link href='/newPost' className={`${pathname === '/newPost' ? 'text-white' : 'text-slate-400'}`}>
          <FiPlusCircle />
      </Link>
      
      <Link href='/notifications' className={`${pathname === '/notifications' ? 'text-white' : 'text-slate-400'}`}>
          <FiHeart />
      </Link>

      <Link href="/profile" className={`${pathname === '/profile' ? 'text-white' : 'text-slate-400'}`}>
          <FiUser />
      </Link>
    </nav>
  )
};