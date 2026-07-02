// app/page.js
import FirstSection from "@/component/SectionPart/FirstSection";
import CardSection from "../component/SectionPart/CardSection";
import SectionPart from "../component/SectionPart/CardSection";
import fetchData from "../logic/DataApi";

export default async function Home() {
  const trendingAll = await fetchData('/trending/all/day')
  const trendingAllWeek = await fetchData('/trending/all/week')
  const trendingMovie = await fetchData('/trending/movie/day')
  const trendingTv = await fetchData('/trending/tv/day')
  return (
    <div className="flex flex-col gap-10">
      <FirstSection  className="w-full h-full"/>
      <CardSection datas={trendingAll} title={'Trending now'} redirect={'/trending/all-day/1'} />
      <CardSection datas={trendingAllWeek} title={'Week Collection'} redirect={'/trending/all-week/1'} />
      <CardSection datas={trendingMovie} title={'Today Movie'} redirect={'/trending/movie-day/1'} />
      <CardSection datas={trendingTv} title={'Today TV'} redirect={'/trending/tv-day/1'} isTv={true}/>
    </div>
  );
}