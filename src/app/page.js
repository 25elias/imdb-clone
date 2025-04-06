import Results from "@/components/Results";

const API_KEY = process.env.APY_KEY;


export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';
  // const res = await fetch (
  //   `https://api.themoveidb.org/3${
  //     genre === 'fetchTopRated' ? `/move/top_rated` : `trending/all/week`
  //   }?api_key=${API_KEY}&language=en-US&page=1`
  // )
  // const data = await res.json();
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data. Please try Again.')
  // }
  // const results = data.results;
  //results={results} 
  return (
    <div className="min-h-screen">
      
      <Results />
    </div>
  );
}
