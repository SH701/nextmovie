import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";


type IParams = Promise<{
  id: string;
}>;

export async function generateMetadata({
    params: { id },}) {
      const { title } = await getMovie(id)
      return {title,}
  }


export default async function MovieDetailPage(props:{ params : IParams}) {
  const params = await props.params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      {/* <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={params.id} />
      </Suspense> */}
    </div>
  );
}
