"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image src={'./logo.svg'}
        alt='logo'
        width={50}
        height={50}
      />
      <div className='flex items-center gap-6'>
        {isSignedIn && 
          <Link href={'/dashboard'}>
            <Button variant='outline' className="bg-primary text-white">Dashboard</Button>
          </Link>
        }
        {isSignedIn ?
          <UserButton /> :
          <Link href={'/sign-in'}>
            <Button variant='outline'>Get Started</Button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Header;