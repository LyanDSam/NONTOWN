import LinkDirect from "@/component/LinkDirect"
import LoadGenres from "@/component/LoadGenres"
import fetchData from "@/logic/DataApi"

const Information = async ({ datas, title, certification }) => {
    const year = (datas.release_date || datas.first_air_date)?.split("-")[0] ?? "????" 

    return (
        <div className="flex flex-col text-white max-w-2xl">
            <div>
                <div className="flex flex-row md:text-5xl sm:text-4xl text-3xl font-bold mb-5 gap-2">
                    <h1 className="">
                        {title}
                    </h1>
                    <h1 className="font-semibold text-gray-300">
                        {` (${year})`}
                    </h1>
                </div>
                <div className="my-3 flex flex-row gap-2 items-center">
                    {certification? <h1 className="font-semibold border-2 border-gray-300 inline-block p-1 text-gray-300 ">{certification}</h1> : null}
                    <h1 className=" inline-block p-1 text-white ">
                        {(datas.release_date || datas.first_air_date)?.split("-").join("/") ?? "-"}
                    </h1>
                    <h1 className=" inline-block text-white ">●</h1>
                    {<LoadGenres genresData={datas.genres} />}
                </div>
                <p className="text-lg leading-8">
                    {datas.overview}
                </p>
            </div>

            <div className="py-5">
                <LinkDirect text={'Watch Now'} directTo={'/'} />
            </div>
        </div>
    )
}

export default Information