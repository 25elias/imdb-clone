import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from "react-icons/fi";

//`https://image.tmbd.org/t/p/original/${result.backdrop_path || result.poster_path}`

export default function Cards({result}) {
  return (
    <div className='group sm:mt-0 w-min sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 '>
        <Link href={`/movie/${id}`}>
            <img
            src='about.png'
                alt='image'
                className='w-max  sm:rounded-t-lg group-hover:opacity-75 transition-opacity
                duration-300'
            />
            <div className='p-2'>
                <p className='line-clamp-2 text-md' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia impedit dicta autem provident minus saepe in a</p>
                <h2 className='text-lg font-bold truncate'>Lorem Ipsum</h2>
                <p>
                    {/* {
                        {result.release_date || result.first_air_date}
                        <ThumbsUp className='h-5 mr-1 ml-3' />
                        {result.vote_count}
                    } */}
                </p>
            </div>
        </Link>
    </div>
  )
}
