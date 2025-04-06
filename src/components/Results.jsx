import Link from 'next/link'
import React from 'react'
import Cards from './Cards'

export default function Results({results}) {
  return (
    <div className='max-w-6xl mx-auto min-h-full px-8'>
        <Cards />
        {/*
            results.map((result) => 
                <Cards key={result.id} result={result} />
            )
        */}
    </div>
  )
}
