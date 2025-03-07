import { API_url } from "../(home)/page";

async function getMovie(id:string) {
    const response  = await fetch(`${API_url}/${id}`,{});
    return response.json();

}

export default async function MovieInfo({id}:{id:string}) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}