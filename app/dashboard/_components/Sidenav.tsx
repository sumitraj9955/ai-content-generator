// components/Sidenav.js
"use client"
import { FileClock, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

function Sidenav() {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Upgrade',
            icon: Wallet,
            path: '/dashboard/upgrade'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ]

    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [path])

    return (
        <div className='h-screen relative p-5 shadow-md border bg-white'>
            <div className='flex justify-center border-b'>
                <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-10'>
                {MenuList.map((menu, index) => (
                    <Link href={menu.path} key={index} passHref>
                        <div className={`flex gap-2 mb-2 p-3
                         hover:bg-primary hover:text-white rounded-lg 
                         cursor-pointer items-center
                         ${path == menu.path && 'bg-primary text-white'}`}>
                            <menu.icon />
                            <h2>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    )
}

export default Sidenav
