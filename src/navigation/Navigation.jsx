import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react'
import HomeNavigation from './HomeNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color, size }) => (
          <Icon name='home' color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Account" component={AccountNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color, size }) => (
          <Icon name='user' color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )
}