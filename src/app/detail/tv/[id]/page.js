import HeroDesktop from "@/component/HeroDesktop";
import HeroTrailer from "@/component/HeroTrailer";
import fetchData from "@/logic/DataApi";

export async function generateMetadata({params}) {
    const {id} = await params
    const data = await fetchData(`/tv/${id}`)
    const title = `${data.name} — NONTOWN`
    return{
        title: title,
        description: data.overview,
    }
}

export default async function Detail({ params }) {
    const { id } = await params;

    const tv = await fetchData(`/tv/${id}`);

    const videos = await fetchData(`/tv/${id}/videos`);

    const rawCertification = await fetchData(`/tv/${id}/content_ratings`)
    const certification = rawCertification.find(
        (certif) => certif.iso_3166_1 === "ID"
    ) ?? rawCertification.find(
        (certif) => certif.iso_3166_1 === "US"
    )
    const finalCertification = certification? certification.rating : '??'


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
        tv.backdrop_path;

    return (
        <div className="w-full overflow-visible">

            <HeroTrailer
                backdropUrl={backdropUrl}
                trailerKey={trailer?.key}
                title={tv.name}
                overview={tv.overview}
            >
                <HeroDesktop movie={tv} cert={finalCertification}/>
            </HeroTrailer>
        </div>
    );
}