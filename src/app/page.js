// app/page.js
import SectionPart from "../component/SectionPart";
import fetchData from "../logic/DataApi";

export default async function Home() {
  const popular = await fetchData('/movie/popular')
  const topRated = await fetchData('/movie/top_rated')
  return (
    <>
      <SectionPart datas={popular} title={'Popular'} redirect={'/popular'} />
      <SectionPart datas={topRated} title={'Top Rated'} redirect={'/top_rated'} />
    </>
  );
}