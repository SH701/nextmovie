import SimilarMovie from "../../../../components/similarmovie";
import { API_url } from "../../../../config";
import styles from "../similar/similar.module.css";

interface Params {
    id: string;
  }
  
  interface PageProps {
    params: Params;
  }
async function getSimilarMovie(id: string) {
    const response = await fetch(`${API_url}/${id}/similar`);
    return response.json();
}


export default async function Similar({ params }: PageProps) {
    const similars = await getSimilarMovie(params.id);

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
