import { API_url } from "../(home)/page";
import styles from "../../styles/movie-info.module.css"

export async function getMovie(id:string) {
    const response  = await fetch(`${API_url}/${id}`,{});
    return response.json();

}

export default async function MovieInfo({id}:{id:string}) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}> 
            <img className={styles.poster} src={movie.backdrop_path}/>
            <div>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <p className={styles.info}>{movie.overview}</p>
                <a href={movie.homepage}
                target={"_blank"}>homepage &rarr;</a>
            </div>
        </div>
    )
}