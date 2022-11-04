import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  RootStackParamList,
  HomeStackScreen,
  JoueursStackScreen,
  MatchsStackScreen,
  EquipesStackScreen,
} from './app-stacks'

// Define main tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>()
export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Choix des icones pour chaque onglet
          tabBarIcon: ({ color, size }) => {
            let iconName: any

            if (route.name === 'Home') {
              iconName = 'home-outline'
            } else if (route.name === 'Joueurs') {
              iconName = 'man-outline'
            } else if (route.name === 'Matchs') {
              iconName = 'football-outline'
            } else if (route.name === 'Equipes') {
              iconName = 'people-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#D98934',
          inactiveTintColor: '#2596be',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Equipes" component={EquipesStackScreen} />
        <Tab.Screen name="Joueurs" component={JoueursStackScreen} />
        <Tab.Screen name="Matchs" component={MatchsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
