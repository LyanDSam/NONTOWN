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
        process.env.NEXT_PUBLIC_BASE_POSTER_URL_ORI +
        movie.poster_path;

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
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 z-20">

                    <div className="w-60 sm:w-56 md:w-72">
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
        </div>
    );
}