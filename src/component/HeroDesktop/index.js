import Image from "next/image"
import Information from "./Information";

const HeroDesktop = ({ movie, cert }) => {
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
                    <h1 className="text-prrimary font-semibold italic text-gray-200 text-xl px-3">{movie.tagline ? `${movie.tagline}` : ""}</h1>

                </div>

                <Information datas={movie} title={title} certification={cert}/> 
            </div>
        </div>
    )
}

export default HeroDesktop