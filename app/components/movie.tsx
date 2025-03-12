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
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link prefetch href={`/movies/${id}`} className={styles.title}>{title}</Link>
          </div>
    )
}