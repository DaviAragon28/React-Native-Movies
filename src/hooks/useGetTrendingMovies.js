import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../utils/constants";

export function useGetTrendingMovies(page = 1) {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        const get = async () => {
            fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}&language=en-US`)
                .then(resp => resp.json())
                .then(data => {
                    setTrending(data)
                })
        }
        get()
    }, [])

    return { trending }
}