"use client"
import Image from "next/image";
import Link from "next/link";

import Skeleton from "react-loading-skeleton";

const SectionPart = ({ datas, title,redirect }) => {
    const posterUrl = process.env.NEXT_PUBLIC_BASE_POSTER_URL_LOW
    datas = datas.slice(0, 12)
    return (
        <div className="p-3 py-5 ">
            <div className="flex flex-row justify-between items-center py-2 px-5">
                <h1 className="font-bold text-2xl text-white">{title}</h1>
                <Link className=" text-md  text-white hover:text-purple-400 transition-all" href={redirect}>lihat selengkapnya</Link>
            </div>
            <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2">
                {datas.map((data) => (
                    <Link className=" py-3 px-1 flex flex-col items-center gap-1" key={data.id} href={`/detail/${data.id}`}>
                        <Image src={`${posterUrl}${data.poster_path}`} width={200} height={150} alt="..." />
                        <h2 className="text-md text-white">{data.original_title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default SectionPart