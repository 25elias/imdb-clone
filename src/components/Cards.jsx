import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from "react-icons/fi";

//`https://image.themoviedb.org/t/p/original/${result.backdrop_path || result.poster_path}`

export default function Cards({result}) {
  return (
    <div className='group w-full sm:mt-0 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 '>
        <Link href={`/movie/${result.id}`
        } className="w-full h-min">
            <Image
            src={`https://image.tmdb.org/t/p/original${result.backdrop_path || result.poster_path}`}
            width={500}
            height={300}
                alt='image'
                className='w-max  sm:rounded-t-lg group-hover:opacity-75 transition-opacity
                duration-300'
            style={{minHeight: '300'}}
            />
            
            <div className='p-2'>
                <p className='line-clamp-2 text-md' >{result.overview}</p>
                <h2 className='text-lg py-2 font-bold truncate'>{result.original_title || result.name}</h2>
                <div>
                    <p><span className='font-semibold'>Release Date: </span>{result.release_date || result.first_air_date}</p>
                    <p className='flex gap-2'><span><FiThumbsUp className='h-5 mr-1 ml-3' /></span>{result.vote_count}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}
