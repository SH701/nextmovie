import { API_url } from "../config";
import styles from "../../styles/movie-videos.module.css"

async function getVideos(id:string) {
    const response = await fetch(`${ API_url}/${id}/videos`)
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <>
        <div className={styles.section}>
        <h2>Related Videos</h2>
        </div>
        <div className={styles.container}>
            {videos.slice(0,20).map((video) => (
                <iframe key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    title={video.name} />
            ))}
        </div></>
    );
}