import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../utils/constants";

export function useGetGenres () {
    const [genresMovies, setGenresMovies] = useState([])

    useEffect(() => {
        const get = async () => {
            fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
                .then(resp => resp.json())
                .then(({ genres }) => { 
                    setGenresMovies(genres);
                })
        }
        get()
    }, [])

    return { genresMovies }
}