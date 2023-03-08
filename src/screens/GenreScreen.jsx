import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useGetMoviesByGender } from '../hooks/useGetMoviesByGender'
import MovieList from '../containers/MovieList'

export default function GenreScreen({ route: { params } }) {
  const { moviesByGenre, getMoviesByGenre } = useGetMoviesByGender(params.id)

  useEffect(() => {
    getMoviesByGenre()
  }, [params.id])

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{params.name}</Text>
      <View >
        <MovieList movies={moviesByGenre} vertical={true} />
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