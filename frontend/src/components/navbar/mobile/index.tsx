'use client'

import Link from "next/link";
import { FiHome, FiSearch, FiPlus, FiHeart, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function NavBarMovile(): JSX.Element {

  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-center items-center fixed bottom-0 w-full bg-color3 py-7 px-4 gap-14 text-white text-3xl">

      <Link href="/" className={`${pathname === '/' ? 'text-white' : 'text-slate-400'}`}>
        <p>
          <FiHome />
        </p>
      </Link>
      <Link href="/search" className={`${pathname === '/search' ? 'text-white' : 'text-slate-400'}`}>
        <p>
          <FiSearch />
        </p>
      </Link>

      <p>
        <FiPlus />
      </p>
      
      <p>
        <FiHeart />
      </p>

      <Link href="/profile" className={`${pathname === '/profile' ? 'text-white' : 'text-slate-400'}`}>
        <p>
          <FiUser />
        </p>
      </Link>

    </nav>
  )
};