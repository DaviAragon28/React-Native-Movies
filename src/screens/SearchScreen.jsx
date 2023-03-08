import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MovieList from '../containers/MovieList';
import { useGetMoviesBySearch } from '../hooks/useGetMoviesBySearch';

export default function SearchScreen({ route: { params: { nameMovie } } }) {
  const { moviesBySearch, getMoviesByResult } = useGetMoviesBySearch(nameMovie)

  getMoviesByResult()

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Search: {nameMovie}</Text>
      <View >
        <MovieList movies={moviesBySearch.results} vertical={true} />
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
    color: "#501c5d",
    textTransform: 'capitalize'
  }
})