import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border bg-white rounded-md mx-w-lg'>
        <Search />
        <input type='text' placeholder='Search...' className='outline-none' />
      </div>
      <div className='flex items-center gap-5 cursor-pointer'>
        <Link href='/dashboard/upgrade'>
          <h2 className='bg-primary rounded-full text-xs text-white px-4 py-2'>
            🔥 Join Membership just for $8/Month
          </h2>
        </Link>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
