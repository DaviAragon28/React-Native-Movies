import { Text, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useGetTrendingMovies } from '../hooks/useGetTrendingMovies'
import MovieList from '../containers/MovieList'
import { View } from 'react-native'
import Searcher from '../components/Searcher'
import { useGetGenres } from '../hooks/useGetGenres'
import GenreList from '../containers/GenreList'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const navigation = useNavigation()
    const { trending } = useGetTrendingMovies()
    const { genresMovies } = useGetGenres()
    const goToTrendingScreen = () => {
        navigation.navigate('Trending')
    }
    return (
        <ScrollView  >
            <View style={styles.container}>
                <Searcher />
                <View>
                    <View style={styles.containerBlockTrending}>
                        <Text style={styles.title}>Trending Movies</Text>
                        <View style={styles.button}>
                            <Button title='See more' color="#501c5d" onPress={goToTrendingScreen} />
                        </View>
                    </View>
                    <ScrollView horizontal={true}>
                        <MovieList movies={trending.results} />
                    </ScrollView>
                </View>
                <ScrollView horizontal={true} >
                    <View style={styles.containerBlockGenres}>
                        <Text style={styles.title}>Genres</Text>
                        <View style={styles.b}>
                            <GenreList genres={genresMovies} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingTop: 60,
        paddingLeft: 10,
    },
    containerBlockTrending: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        justifyContent: "space-between"
    },
    title: {
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 20,
        color: "#501c5d"
    },
    button: {
        marginRight: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    containerBlockGenres: {
        marginVertical: 20,
        width: 370,
        // paddingHorizontal:
        // backgroundColor: "red",
        // backgroundColor: "yellow",
    },
})