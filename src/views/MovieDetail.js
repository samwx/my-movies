import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});


    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await MoviesService.getMovieById(id);
            setMovie(data);
        }

        fetchMovie();
    }, [id]);

    return (
        <>
            <h1>{movie.title}</h1>

            <article>
                {movie.overview}
            </article>
        </>
    )
}