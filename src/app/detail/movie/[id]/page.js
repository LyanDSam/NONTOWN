import HeroDesktop from "@/component/HeroDesktop";
import HeroTrailer from "@/component/HeroTrailer";
import fetchData from "@/logic/DataApi";

export async function generateMetadata({ params }) {
    const { id } = await params
    const data = await fetchData(`/movie/${id}`)
    const title = `${data.title} — NONTOWN`
    return {
        title: title,
        description: data.overview,
    }
}

export default async function Detail({ params }) {
    const { id } = await params;

    const movie = await fetchData(`/movie/${id}`);

    const videos = await fetchData(`/movie/${id}/videos`);

    const rawCertification = await fetchData(`/movie/${id}/release_dates`)
    const certification = rawCertification.find(
        (certif) => certif.iso_3166_1 === "ID"
    ) ?? rawCertification.find(
        (certif) => certif.iso_3166_1 === "US"
    ) ?? rawCertification[0] 
    const finalCertification = certification? certification.release_dates[0].certification : '??'

    const trailer =
        videos.find(
            (video) =>
                video.site === "YouTube" &&
                video.type === "Trailer" &&
                video.name === "Official Trailer"
        ) ||
        videos.find(
            (video) =>
                video.site === "YouTube" &&
                video.type === "Trailer"
        );


    const backdropUrl =
        process.env.NEXT_PUBLIC_BASE_POSTER_URL_ORI +
        movie.backdrop_path;

    return (
        <div className="w-full overflow-visible">

            <HeroTrailer
                backdropUrl={backdropUrl}
                trailerKey={trailer?.key}
                title={movie.title}
                overview={movie.overview}
            >
                <HeroDesktop movie={movie} cert={finalCertification}/>
            </HeroTrailer>
        </div>
    );
}