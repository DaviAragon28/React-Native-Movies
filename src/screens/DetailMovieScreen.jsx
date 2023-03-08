import { View, Text, ScrollView, ImageBackground, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { useGetGenres } from '../hooks/useGetGenres';
import Genre from '../components/Genre';
import { useGetSimilars } from '../hooks/useGetSimilars';
import MovieList from '../containers/MovieList';
import { IMAGE_URL } from '../utils/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function DetailMovieScreen({ navigation, route: { params: { movie } } }) {
  const { genresMovies } = useGetGenres()
  const { similars, getSimilars } = useGetSimilars(movie.id)

  let genreOfThisMovie = []

  useEffect(() => {
    console.log(navigation);
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 10, marginTop: 40 }}
          onPress={navigation.goBack}
        />
      ),
    })
    getSimilars()
  }, [movie])

  for (let index = 0; index < genresMovies.length; index++) {
    const filterArray = genresMovies.filter(item => item.id === movie.genre_ids[index])
    if (filterArray.length > 0) {
      genreOfThisMovie.push(filterArray[0])
    }
  }
  return (
    <ScrollView style={styles.scroll} >
      <SafeAreaView>


        <ImageBackground source={{ uri: `${IMAGE_URL}/${movie.poster_path}` }} style={styles.imageBackground}>
        </ImageBackground>


        <View style={styles.container}>
          <View style={styles.containerBlockTitle}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.containerBlockAverage}>
              <Icon name='star' solid />
              <Text style={styles.average}>{movie.vote_average}</Text>
            </View>
          </View>
          <Text>{movie.overview}</Text>
          <View style={styles.genres}>
            {
              genreOfThisMovie.length > 0
              && genreOfThisMovie.map(genre => (
                <Genre genre={genre} key={genre.id} />
              ))
            }
          </View>
          <View style={styles.containerSimilar}>
            <Text style={styles.title}>Similar movies</Text>
            <ScrollView horizontal={true} >
              <MovieList movies={similars} />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    position: "relative",
    flex: 1,

    backgroundColor: "#eee",
  },
  imageBackground: {
    width: "100%",
    height: 500,
    borderRadius: 10,
    resizeMode: 'center',
    // position: "absolute"
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    // position: 'absolute',
    backgroundColor: "#eee",
    top: -20,
    bottom: 0,
    borderRadius: 20
    // zIndex: 20

  },
  containerBlockTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20

  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    width: "70%",
    marginBottom: 10
  },
  containerBlockAverage: {
    flexDirection: "row",
    alignItems: "center",

  },
  average: {
    fontSize: 15,
    fontWeight: '500',
    alignSelf: "flex-end",
    paddingLeft: 5
  },
  genres: {
    flexDirection: "row",
    flexWrap: "wrap",
    // paddingRight: 20,
    // backgroundColor: "red"
  },
  containerSimilar: {
    marginTop: 10
  }
})