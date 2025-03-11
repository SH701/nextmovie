import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

interface PageProps {
  query: {
    id: string;
  };
}

export async function generateMetadata({ query }: PageProps) {
  const movie = await getMovie(query.id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ query }: PageProps) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={query.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={query.id} />
      </Suspense>
    </div>
  );
}