import Link from 'next/link'
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from 'react'
import MenuItem from './MenuItem'
import ThemeSwitch from './ThemeSwitch';
import NavItem from './NavItem';

export default function Header() {
  return (
    <header className='max-w-6xl mx-auto px-8  gap-4 py-4'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <MenuItem title='home' link='/' Icon={AiFillHome} />
                <MenuItem title='about' link='/about' Icon={BsFillInfoCircleFill} />
            </div>
            <div className="flex items-center gap-4">
                <ThemeSwitch />
                <Link href='/' className='flex gap-2 items-center'>
                    <span className='text-2xl font-bold bg-amber-600 px-1 rounded-lg '>IMDb</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </Link>
                <AiOutlineUser className='w-5 h-5 hover:text-amber-400' />
            </div>

        </div>
        <nav className="bg-amber-200 dark:bg-gray-400 flex items-center gap-8 justify-center pt-2 pb-2 mt-1">
            <NavItem title='Trending' param='fetchTrending' />
            <NavItem title='Top Rated' param='fetchTopRated' />
        </nav>
    </header>
  )
}
