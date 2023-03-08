import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Genre from '../components/Genre'

export default function GenreList({ genres }) {
  return (
    <FlatList 
        data={genres}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(genre) => String(genre.id)}
        renderItem={({ item }) => <Genre genre={item} />}
        contentContainerStyle={styles.flatlist}
        
    />
  )
}

const styles = StyleSheet.create({
  flatlist: {
      flexDirection: "column",
      // paddingBottom: 40,
      // backgroundColor: "red",
      alignContent: "center",
      alignItems: "center",
      paddingHorizontal: 20
  }
})