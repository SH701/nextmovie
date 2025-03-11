import SimilarMovie from "../../../../components/similarmovie";
import { API_url } from "../../../../config";
import styles from "../similar/similar.module.css";

export async function getSimilarMovie(id: string) {
    const response = await fetch(`${API_url}/${id}/similar`,{
    cache: "no-store"});
    return response.json();
}

export default async function Similar({ params }: { params: { id: string } }) {
    const similars = await getSimilarMovie(params.id);

    return (
        <div className={styles.container}>
            {similars.map((similar)=>(
                <SimilarMovie 
                key={similar.id}
                id={similar.id} 
                title={similar.title} 
                poster_path={similar.poster_path}/>
            ))}
        </div>
    )
}