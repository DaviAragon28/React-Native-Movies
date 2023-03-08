import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../utils/constants";

export function useGetMoviesByGender(genre) {
    const [moviesByGenre, setMoviesByGenre] = useState([])


    const getMoviesByGenre = async () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&language=en-US`)
            .then(resp => resp.json())
            .then(({ results }) => {
                setMoviesByGenre(results)
            })
    }



    return { moviesByGenre, getMoviesByGenre }
}