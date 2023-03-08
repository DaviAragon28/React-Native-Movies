import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import { Button } from 'react-native'
import DetailMovieScreen from '../screens/DetailMovieScreen'
import GenreScreen from '../screens/GenreScreen'
import TrendingScreen from '../screens/TrendingScreen'
import SearchScreen from '../screens/SearchScreen'

const Stack = createNativeStackNavigator()

export default function HomeNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeNavigation' component={HomeScreen}  options={{ title: '', headerShown: false}}/>
            <Stack.Screen name='Detail' component={DetailMovieScreen} options={{ title: '', headerTransparent: true}}  />
            <Stack.Screen name='Genre' component={GenreScreen} />
            <Stack.Screen name='Trending' component={TrendingScreen}  />
            <Stack.Screen name='Search' component={SearchScreen}  />
        </Stack.Navigator>
    )
}