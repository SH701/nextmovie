import Movie from "../components/movie";
import styles from "../../styles/home.module.css"
import { API_url } from "../config";


async function getMovies(){
   const response = await fetch(API_url)
   const json = await response.json()
   return json;
}

export default async function HomePage(){
    const movies = await getMovies()
    return (
        <div className={styles.container}>
        {movies.map((movie) => (
         <Movie key={movie.id} 
         id={movie.id} 
         title={movie.title} 
         poster_path={movie.poster_path}/>
        ))}
      </div>
    )
}