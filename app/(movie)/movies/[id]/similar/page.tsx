import SimilarMovie from "../../../../components/similarmovie";
import { API_url } from "../../../../config";
import styles from "../../../../../styles/home.module.css";


type SegmentParams<T extends object = any> = T extends Record<string, any>
  ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
  : T;

export interface PageProps {
  params: SegmentParams
  searchParams: any
}


async function getSimilarMovie(id: string) {
  const response = await fetch(`${API_url}/${id}/similar`);
  return response.json();
}


export default async function SimilarPage({ params }: PageProps) {

  const { id } = params;


  const similars = await getSimilarMovie(id);

  return (
    <div className={styles.container}>
      {similars.map((similar: any) => (
        <SimilarMovie
          key={similar.id}
          id={similar.id}
          title={similar.title}
          poster_path={similar.poster_path}
        />
      ))}
    </div>
  );
}
