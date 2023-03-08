import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Genre({ genre }) {
    const navigation = useNavigation()

    const goToGenre = () => {
        navigation.navigate('Genre', { name: genre.name, id: genre.id})
    }
    return (
        <TouchableWithoutFeedback onPress={goToGenre}>
            <View style={styles.container}>
                {/* <View style={styles.square}></View> */}
                <Text style={styles.text}>{genre.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: "#3a6aad",
        paddingHorizontal: 10,
        paddingVertical: 5
        // width: "30%"
    },
    text: {
        color: "white",
        fontWeight: "400"
    },
})