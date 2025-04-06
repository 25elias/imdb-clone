import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, link, Icon}) {
  return (
    <Link href={link} className='hover:text-amber-400'>
      <Icon className='sm:hidden text-2xl'/>
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
