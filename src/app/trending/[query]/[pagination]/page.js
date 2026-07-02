import Card from "@/component/Card"
import LinkDirect from "@/component/LinkDirect"
import fetchData from "@/logic/DataApi"
import getTotalPages from "@/logic/DataApi/getTotalPage";
import { redirect } from "next/navigation";


export default async function trending({ params }) {
    const { query, pagination } = await params
    const queryUrl = '/trending/' + query.split('-').join('/')
    const pageLimit = await getTotalPages(queryUrl)
    if(pagination > pageLimit){
        return redirect(`/trending/${query}/${pageLimit}`)
    }
    const datas = await fetchData(`${queryUrl}?page=${pagination}`)
    const posterUrl = process.env.NEXT_PUBLIC_BASE_POSTER_URL_LOW

    return (
        <div className="py-7">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
                {datas.map((data) => {
                    const redirectTo = data.media_type == 'tv' ? '/detail/tv/' : '/detail/movie/'
                    const cardTitle = data.title || data.name || ''
                    return (
                        <Card key={data.id} id={data.id} imgUrl={`${posterUrl}${data.poster_path}`} title={cardTitle} redirectTo={`${redirectTo}${data.id}`} />
                    )
                })}
            </div>
            <div className="text-xl flex flex-row justify-between px-5">
                {pagination != 1 ? <LinkDirect text={'Previous'} directTo={`/trending/${query}/${+pagination - 1}`} /> : <div></div>}
                {pagination != pageLimit ? <LinkDirect text={'Next'} directTo={`/trending/${query}/${+pagination + 1}`} /> : <div></div>}
            </div>
        </div>
    )
}