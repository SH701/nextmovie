import { API_url } from "../config";
import styles from "../../styles/movie-info.module.css"
import Link from "next/link";

export async function getMovie(id:string) {
    const response  = await fetch(`${API_url}/${id}`,{});
    return response.json();

}
async function getCredit(id: string) {
    const response = await fetch(`${API_url}/${id}/credits`);
    return await response.json();
}

export default async function MovieInfo({id}:{id:string}) {
    const movie = await getMovie(id);
    const credits = await getCredit(id);
    const actor = credits.slice(0,6);

    return (
        <>
        <div className={styles.section}>
        <h2>Information</h2>
        </div>
        <div className={styles.container}>
            <img className={styles.poster} src={movie.backdrop_path} />
            <div className={styles.box}>
                <h1 className={styles.title}>{movie.title}</h1>
                {movie.genres.slice(0, 2).map((genre) => genre.name).join(", ")}
                <h3>⏰{movie.runtime} Min</h3>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <h3>📅{movie.release_date}</h3>
                <p className={styles.info}>{movie.overview}</p>
                <div className={styles.linkbox}>
                <a className={styles.homepage} href={movie.homepage}
                    target={"_blank"}>Homepage</a>
                <Link className={styles.homepage} href={`/movies/${id}/similar`} >
                    Similar
                </Link>
                </div>
        </div>
        </div>
        <div className={styles.section}>
        <h2>Top Credits</h2>
        </div>
        <div className={styles.credit}>
                    <div className={styles.card}>
                        {actor.map((credit) => (
                            <div key={credit.id} className={styles.actor}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w185${credit.profile_path}`} />
                                <p className={styles.name}>{credit.name}</p>
                                <p className={styles.character}>{credit.character}</p>
                            </div>
                        ))}
                         <Link className={styles.all} href={`/movies/${id}/credits`}>See All &rarr;</Link>
                    </div>
                    </div></>
    )
}