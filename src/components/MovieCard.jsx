import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'
import React from 'react'
import { IMAGE_URL } from '../utils/constants'
import { useNavigation } from '@react-navigation/native'

export default function MovieCard({ movie }) {
    const navigation = useNavigation()

    const goToDetail = () => {
        navigation.navigate('Detail', { movie: movie})
    }

    return (
        <TouchableWithoutFeedback onPress={goToDetail}>
            <View style={styles.container}>
                <Image source={ movie?.poster_path ? {  uri: `${IMAGE_URL}/${movie.poster_path}` } : { uri: 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg'}} style={styles.image} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginRight: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },

    },
    image: {
        width: 180,
        height: 300,
        borderRadius: 10,

        // resizeMode: "cover"
    }
})