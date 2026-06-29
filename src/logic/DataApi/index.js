export default async function fetchData(endpoint){
    const tmdbUrl = `${process.env.BASE_URL_TMDB}${endpoint}`;
    
    const tmdbRes = await fetch(`${tmdbUrl}`, {
        headers: { Authorization: `Bearer ${process.env.API_KEY_TMDB}` }
    });

    const tmdbData = await tmdbRes.json();

    if(tmdbData.results){
        return(tmdbData.results)
    }
    else{
        return(tmdbData)
    }
}
