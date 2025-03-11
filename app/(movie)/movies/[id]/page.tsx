import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

type SegmentParams<T extends object = any> = T extends Record<string, any>
  ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
  : T;

export interface PageProps {
  params: SegmentParams
  searchParams: any
}


export async function generateMetadata({ params }: PageProps) {
    const movie = await getMovie(params.id);
    return {
      title: movie.title 
    };
}

export default async function MovieDetailPage({ params }: PageProps) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}