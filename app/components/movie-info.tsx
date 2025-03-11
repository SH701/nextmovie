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
    const actor = credits.slice(0,3);

    return (
        <>
        <div className={styles.section}>
        <h2>Information</h2>
        </div>
        <div className={styles.container}>
            <img className={styles.poster} src={movie.backdrop_path} />
            <div className={styles.box}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <p className={styles.info}>{movie.overview}</p>
                <a className={styles.homepage} href={movie.homepage}
                    target={"_blank"}>homepage &rarr;</a>
                <Link href={`/movies/${id}/similar`} >
                    similar &rarr;
                </Link>
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