import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../utils/constants";

export function useGetSimilars(movieID) {
    const [similars, setSimilars] = useState([])


    const getSimilars = async () => {
        fetch(`${API_URL}/movie/${movieID}/similar?api_key=${API_KEY}&language=en-US`)
            .then(resp => resp.json())
            .then(({ results }) => {
                setSimilars(results)
            })
    }


    return { similars, getSimilars }
}