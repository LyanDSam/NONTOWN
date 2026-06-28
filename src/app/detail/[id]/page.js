import HeroTrailer from "@/component/HeroTrailer";
import StreamButton from "@/component/StreamButton";
import fetchData from "@/logic/DataApi";
import Image from "next/image";

export default async function Detail({ params }) {
    const aLERTIT = () =>{
        alert('ON PROGRES DAWG')
    }
    const { id } = await params;

    const movie = await fetchData(`/movie/${id}`);

    const videos = await fetchData(`/movie/${id}/videos`);

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

    const posterUrl =
        process.env.NEXT_PUBLIC_BASE_POSTER_URL +
        movie.poster_path;

    const backdropUrl =
        process.env.NEXT_PUBLIC_BASE_POSTER_URL +
        movie.backdrop_path;

    return (
        <>
            <HeroTrailer
                backdropUrl={backdropUrl}
                trailerKey={trailer?.key}
            >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                    <div className="w-48 sm:w-56 md:w-72">
                        <Image
                            src={posterUrl}
                            width={500}
                            height={750}
                            className="w-full h-auto rounded-xl"
                            alt={movie.title}
                        />
                    </div>

                    <div className="text-white max-w-2xl">

                        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold mb-5">
                            {movie.title}
                        </h1>

                        <p className="text-lg leading-8">
                            {movie.overview}
                        </p>
                        <StreamButton/>
                    </div>

                </div>
            </HeroTrailer>

            {/* Trailer untuk Mobile */}
            <div className="lg:hidden max-w-6xl mx-auto p-5">
                {trailer && (
                    <iframe
                        className="w-full aspect-video rounded-xl"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        allowFullScreen
                    />
                )}
            </div>
        </>
    );
}