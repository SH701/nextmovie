import SimilarMovie from "../../../../components/similarmovie";
import { API_url } from "../../../../config";
import styles from "../../../../../styles/home.module.css";

interface PageProps  {
    id: string;
    params :{
      id: string
    };
  }


async function getSimilarMovie(id: string) {
    const response = await fetch(`${API_url}/${id}/similar`);
    return response.json();
}


export default async function Similar({ params }: { params: PageProps }) {
    const resolvedParams = await params;
    const similars = await getSimilarMovie(resolvedParams.id);

    return (
        <div className={styles.container}>
            {similars.map((similar:any) => ( 
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
