import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import MovieList from '../containers/MovieList'
import { useGetTrendingMovies } from '../hooks/useGetTrendingMovies'
import { useGetTrendingMoviesTwo } from '../hooks/prueba'

export default function TrendingScreen() {
    const [page, setPage] = useState(1)
    const { trending } = useGetTrendingMovies()


    return (
        <ScrollView horizontal={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Trending movies</Text>
                <MovieList vertical={true} movies={trending.results} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 10
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 20,
        color: "#501c5d"
    }
})