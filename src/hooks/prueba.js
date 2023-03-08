import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../utils/constants";

export function useGetTrendingMoviesTwo(page = 1) {
    const [trending, setTrending] = useState([])
    const arrayNuevo = []

    const getMovies = async () => {
        fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}&language=en-US`)
            .then(resp => resp.json())
            .then(data => {
                arrayNuevo.push(data)
                setTrending([...trending, ...arrayNuevo ])
            })
    }


    return { trending, getMovies }
}