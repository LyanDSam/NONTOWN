import Image from "next/image"
import Link from "next/link";
import LinkDirect from "../LinkDirect";

const HeroDesktop = ({ movie }) => {
    const posterUrl =
        process.env.NEXT_PUBLIC_BASE_POSTER_URL_ORI +
        movie.poster_path;
    if (movie.title) {
        var title = movie.title
    } else {
        title = movie.name
    }

    return (
        <div className="relative ">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 z-20">

                <div className="w-60 sm:w-56 md:w-72 relative">
                    <Image
                        src={posterUrl}
                        width={500}
                        height={750}
                        className="w-full h-auto rounded-xl"
                        alt={title}
                    />
                    <h1 className="text-prrimary font-semibold italic text-gray-200 text-xl px-3">{movie.tagline ? `❝ ${movie.tagline} ❞` : ""}</h1>

                </div>

                <div className="flex flex-col text-white max-w-2xl">
                    <div>
                        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold mb-5">
                            {title}
                        </h1>

                        <p className="text-lg leading-8">
                            {movie.overview}
                        </p>
                    </div>

                    <div className="py-5">
                        <LinkDirect text={'Watch Now'} directTo={'/'}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroDesktop