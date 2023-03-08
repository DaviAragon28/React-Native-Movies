import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../utils/constants";

export function useGetMoviesBySearch(query) {
    const [moviesBySearch, setMoviesBySearch] = useState([])

    const getMoviesByResult = async () => {
        if (query) {
            fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`)
                .then(resp => resp.json())
                .then(data => {
                    setMoviesBySearch(data)
                })
        }
    }

    return { moviesBySearch, getMoviesByResult }
}