"use client"
import Card from "@/component/Card";
import Image from "next/image";
import Link from "next/link";

const CardSection = ({ datas = [], title, redirect, isTv }) => {
    const posterUrl = process.env.NEXT_PUBLIC_BASE_POSTER_URL_LOW
    const sliced = datas.slice(0, 12)

    return (
        <div className="p-3 py-5 ">
            <div className="flex flex-row justify-between items-center py-2 px-5">
                <h1 className="font-bold text-2xl text-white">{title}</h1>
                <Link className=" text-md  text-white hover:text-purple-400 transition-all" href={redirect}>lihat selengkapnya</Link>
            </div>
            <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2">
                {sliced.map((data) => {
                    const redirectTo = isTv ? '/detail/tv/' : '/detail/movie/'
                    const cardTitle = data.title || data.name || ''
                    return (
                        <Card key={data.id} id={data.id} imgUrl={`${posterUrl}${data.poster_path}`} title={cardTitle} redirectTo={`${redirectTo}${data.id}`}/>
                    )
                })}
            </div>
        </div>
    )
}
export default CardSection