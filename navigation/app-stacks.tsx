import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import AllMatchsScreen from '../screens/AllMatchsScreen'
import JoueurScreen from '../screens/JoueurScreen'
import EquipesScreen from '../screens/EquipesScreen'
import JoueursSearchScreen from '../screens/JoueursSearchScreen'
import AllEquipesScreen from '../screens/AllEquipesScreen'
import JoueurEquipeScreen from '../screens/joueurEquipeScreen'
import MatchEquipeScreen from '../screens/MatchEquipeScreen'

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Home: undefined
  Details: undefined
  Matchs: undefined
  MatchEquipe: { equipeId: number }
  Equipes: undefined
  Equipe: { equipeId: number }
  Joueurs: undefined
  Joueur: { joueurId: number }
  JoueurEquipe: { joueurId: number }
}

export interface NavigationProps {
  navigation: StackNavigationProp<RootStackParamList, any>
}

const stackScreenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#2596be',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: '#fff',
}

// Les vues de l'onglet Home
const HomeStack = createStackNavigator<RootStackParamList>()
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={stackScreenOptions}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'StatLigue1' }}
      />
    </HomeStack.Navigator>
  )
}

// Les vues de l'onglet Joueur
const JoueursStack = createStackNavigator<RootStackParamList>()
export const JoueursStackScreen = () => {
  return (
    <JoueursStack.Navigator screenOptions={stackScreenOptions}>
      <JoueursStack.Screen
        name="Joueurs"
        component={JoueursSearchScreen}
        options={{ title: 'Joueurs' }}
      />
      <JoueursStack.Screen name="Joueur" component={JoueurScreen} />
    </JoueursStack.Navigator>
  )
}

// Les vues de l'onglet Matchs
const MatchsStack = createStackNavigator<RootStackParamList>()
export const MatchsStackScreen = () => {
  return (
    <MatchsStack.Navigator screenOptions={stackScreenOptions}>
      <MatchsStack.Screen
        name="Matchs"
        component={AllMatchsScreen}
        options={{ title: 'Matchs' }}
      />
    </MatchsStack.Navigator>
  )
}

// Les vues de l'onglet Equipes
const EquipesStack = createStackNavigator<RootStackParamList>()
export const EquipesStackScreen = () => {
  return (
    <EquipesStack.Navigator screenOptions={stackScreenOptions}>
      <EquipesStack.Screen
        name="Equipes"
        component={AllEquipesScreen}
        options={{ title: 'Equipes' }}
      />
      <EquipesStack.Screen
        name="Equipe"
        component={EquipesScreen}
        options={{ title: 'Equipe' }}
      />
      <EquipesStack.Screen name="JoueurEquipe" component={JoueurEquipeScreen} />
      <EquipesStack.Screen name="MatchEquipe" component={MatchEquipeScreen} />
    </EquipesStack.Navigator>
  )
}
