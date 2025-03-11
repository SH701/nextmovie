import { API_url } from "../../../../config";
import styles from "../credits/credit.module.css";
import { getMovie } from "../../../../components/movie-info";

type IParams = Promise<{
    id: string;
  }>;

export async function getCredit(id: string) {
    const response = await fetch(`${API_url}/${id}/credits`);
    return await response.json();
}

export default async function MovieCredit({ params }: { params: IParams }) { 
    const credits = await getCredit((await params).id);
    const movie = await getMovie((await params).id);
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{movie.title}</h1>
            <div className={styles.gridcontainer}>
            {credits.map((credit) => ( 
                <div key={credit.id} className={styles.card}>
                    <img 
                        src={`https://image.tmdb.org/t/p/w185${credit.profile_path}`} 
                        className={styles.profile}
                        alt={credit.name}
                    />
                    <div className={styles.explain}>
                    <p className={styles.name}>{credit.name}</p>
                    <p className={styles.popularity}>⭐️{credit.popularity.toFixed(1)}</p>
                    <div className={styles.searchbox}>
                    <a href={`https://www.google.com/search?q=${credit.name}`} target="_blank" className={styles.search}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                       Google
                    </a>
                    </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
