import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import DetailMovieScreen from '../screens/DetailMovieScreen'
import AccountScreen from '../screens/AccountScreen'

const Stack = createNativeStackNavigator()

export default function AccountNavigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen  name='DetailMovie' component={AccountScreen} options={{  }}/>
    </Stack.Navigator>
  )
}