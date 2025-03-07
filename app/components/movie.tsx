"use client"

import Link from "next/link";
import styles from "../../styles/movie.module.css"
import { usePathname } from "next/navigation";


export interface IMovieProps{
    title:string,
    id:string,
    poster_path:string
}

export default function Movie({title,id,poster_path}:IMovieProps){
    const pathname = usePathname();
    const onClick = () =>{
        window.location.href=`/movies/${id}`
    }
    return(
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link href={`/movies/${id}`}>{title}</Link>
          </div>
    )
}