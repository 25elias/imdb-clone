import Results from "@/components/Results";

export default async function searchPage({params}){
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.searchTerm}&api_key=${process.env.API_KEY}&language=en-US&include_adult=false`);

    if(!res.ok){
        throw new Error("Search not found. Retry");
    }
    const data = await res.json();
    const results = data.results;
    // console.log(results);

    return(
        <div>
            {results && results.length === 0 &&
                (<h1 className="text-lg text-center">No results found</h1>)
            }

            {results &&
                (<Results results={results} />)
            }
        
        </div>
    )
}