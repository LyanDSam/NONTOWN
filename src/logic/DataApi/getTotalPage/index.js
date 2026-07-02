export default async function getTotalPages(endpoint) {
    const tmdbUrl = `${process.env.BASE_URL_TMDB}${endpoint}`;

    const tmdbRes = await fetch(`${tmdbUrl}`, {
        headers: { Authorization: `Bearer ${process.env.API_KEY_TMDB}`, },
        cache: "no-store",
    }
    );

    const tmdbData = await tmdbRes.json();

    if(tmdbData.total_pages){
        return (tmdbData.total_pages)
    } else{
        return (
            0
        )
    }
}
