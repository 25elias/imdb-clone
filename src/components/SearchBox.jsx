"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";



export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
    }

    return(
        <form className="flex justify-between px-8 max-w-6xl mx-auto"
        onSubmit={handleSubmit}>
            <input type="text" placeholder="Search keyword"
            className="w-full h-12 rounded-lg placeholder-gray-500 outline-none
            bg-transparent flex-1" 
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
            <button disabled={!search} className="text-amber-400">Search</button>
        </form>
    )
}