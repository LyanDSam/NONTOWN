// app/page.js
import FirstSection from "@/component/SectionPart/FirstSection";
import CardSection from "../component/SectionPart/CardSection";
import SectionPart from "../component/SectionPart/CardSection";
import fetchData from "../logic/DataApi";

export default async function Home() {
  const popular = await fetchData('/movie/popular')
  const topRated = await fetchData('/movie/top_rated')
  const trendingMovie = await fetchData('/trending/movie/day')
  const trendingTv = await fetchData('/trending/tv/day')
  return (
    <div className="flex flex-col gap-10">
      <FirstSection  className="w-full h-full"/>
      <CardSection datas={popular} title={'Popular'} redirect={'/popular'} />
      <CardSection datas={topRated} title={'Top Rated'} redirect={'/top_rated'} />
      <CardSection datas={trendingMovie} title={'Today Movie'} redirect={'trending/movie'} />
      <CardSection datas={trendingTv} title={'Today TV'} redirect={'/trending/tv'} isTv={true}/>
    </div>
  );
}