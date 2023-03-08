import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useGetMoviesBySearch } from '../hooks/useGetMoviesBySearch';


export default function Searcher() {
  const navigation = useNavigation()
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')



  const onPressButton = () => {
    if (value.length > 0) {
      navigation.navigate('Search', { nameMovie: value })
      setError(false)
    } else {
      setError(true)
    }
  }

  const onHandleInput = (text) => {
    setValue(text)
    setError(false)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie APP</Text>
      <View style={styles.containerWithError} >
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Avengers..."
            onChangeText={(text) => onHandleInput(text)}
          />
          <TouchableWithoutFeedback onPress={onPressButton}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#fff" />
          </TouchableWithoutFeedback>
        </View>
        {error && <Text style={styles.error}>No hay nada que buscar</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
    color: "#501c5d"
  },
  containerWithError: {
    flexDirection: "column"
  },
  containerInput: {
    flexDirection: "row"
  },
  // width: "70%"
  input: {
    height: 50,
    borderColor: "#501c5d",
    borderWidth: 2,
    paddingLeft: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 0,
    // marginRight: 10,
    width: "85%"
  },
  searchIcon: {
    padding: 10,
    backgroundColor: "#501c5d",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  error: {
    color: "red"
  }
})