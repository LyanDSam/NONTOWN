import LinkDirect from "@/component/LinkDirect";
import fetchData from "@/logic/DataApi";
import Image from "next/image";
import Link from "next/link";

const FirstSection = async () => {
    var data = await fetchData('/trending/all/day')
    data = data[0]
    const backdropUrl = `${process.env.NEXT_PUBLIC_BASE_POSTER_URL_ORI}${data.backdrop_path}`;
    const posterUrl = `${process.env.NEXT_PUBLIC_BASE_POSTER_URL_LOW}${data.poster_path}`;
    return (
        <section className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `url(${backdropUrl})`,
                }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary from-25% to-black/30 md:block hidden transition-all" />
            <div className="absolute inset-0 bg-black/35 md:hidden block transition-all" />
            <div className="absolute inset-0 bg-linear-to-t from-primary from-0% to-black/0" />


            <div className="relative z-10 p-5 sm:p lg:px-20 md:px-10 sm:top-25 top-45 w-full flex flex-row items-center justify-between">
                <div className="w-150">
                    <h1 className="text-white font-bold text-3xl">
                        {data.media_type === 'tv' ? data.name : data.title}
                    </h1>
                    <h1 className="text-sm font-semibold text-white font-italic mb-5">
                        Today {data.media_type === 'movie' ? 'movie' : 'TV'} Selection
                    </h1>
                    <h1 className="text-sm text-white font-italic mb-5 ">
                        {data.overview}
                    </h1>
                    <div className="absolute -bottom-30 right-10 sm:relative sm:bottom-auto sm:right-auto flex gap-4">
                        <LinkDirect text={'Watch Now'} directTo={'/'}/>
                        <LinkDirect text={'Open'} directTo={`/detail/${data.media_type}/${data.id}`}/>
                    </div>
                </div>
                <div className="w-60 sm:w-56 md:w-72 relative md:block hidden">
                    <Image
                        src={posterUrl}
                        width={500}
                        height={750}
                        className="w-full h-auto rounded-xl"
                        alt=''
                    />

                </div>
            </div>
        </section>
    );
};

export default FirstSection;