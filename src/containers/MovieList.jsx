import { ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { Alert } from 'react-native';

export default function MovieList({ movies, vertical, loadMore, page, setPage }) {
    return (
        <FlatList
            data={movies}
            numColumns={vertical && 2 }
            horizontal={vertical && false}
            keyExtractor={(movie) => String(movie.id)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <MovieCard movie={item}/>}
            contentContainerStyle={vertical ? styles.flatlistVertical : styles.flatlist }
            // onEndReached={() => more()}
            // onEndReachedThreshold={0.2}
            // ListFooterComponent={
            //     <ActivityIndicator
            //         size='large'
            //         style={styles.spinner}
            //         color='#aeaeae'
            //     />
            // }
        />
    )
}

const styles = StyleSheet.create({
    flatlist: {
        flexDirection: 'row',
        // width: "80%",
        // backgroundColor: "red",
        // height: 400,
    },
    flatlistVertical: {
        flexDirection: 'column'
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 40 : 30,
    }
})