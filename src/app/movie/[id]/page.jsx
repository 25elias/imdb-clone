import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";


async function getMovies(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}?language=en-US`
  );
  return await res.json();
  // console.log(movie);
}
export default async function MoviesPage({ params }) {
  const movieId = await params.id;
  const movie = await getMovies(movieId);

  return (
    <div>
      <div className="w-full flex max-w-6xl mx-auto px-8">
        <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          alt="Image not available"
        />
        </div>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{movie.overview}</p>
          <h2 className="text-lg py-2 font-bold truncate">
            {movie.original_title || movie.name}
          </h2>
          <div>
            <p>
              <span className="font-semibold">Release Date: </span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="flex gap-2">
              <span>
                <FiThumbsUp className="h-5 mr-1 ml-3" />
              </span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
