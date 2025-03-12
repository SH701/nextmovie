"use client"

import Link from "next/link";
import styles from "../../styles/movie.module.css"


export interface IMovieProps{
    title:string,
    id:string,
    poster_path:string
}

export default function Movie({title,id,poster_path}:IMovieProps){
    const onClick = () =>{
        window.location.href=`/movies/${id}`
    }
    return(
        <Link href={`/movies/${id}`} prefetch className={styles.movie}>
        <img src={poster_path} alt={title} />
        <span>{title}</span>
      </Link>
    )
}