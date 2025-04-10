"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function NavItem({title, param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  
  return (
    <Link 
    className={`hover:text-amber-500 font-medium 
    ${
      genre === param ?
    'font-bold underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''}`}
    href={`/?genre/${param}`}>
    {title}
    </Link>
  )
}
