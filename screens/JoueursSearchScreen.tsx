import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationProps } from '../navigation/app-stacks'
import joueurApiService from '../services/joueurApi.service'
import Input from '../components/Input'
import JoueursList from '../components/JoueursList'
import Joueur from '../services/joueur.model'
import * as Font from 'expo-font'

interface JoueursSearchScreenState {
  joueurs: Array<Joueur>
}

export default class JoueursSearchScreen extends Component<
  NavigationProps,
  JoueursSearchScreenState
> {
  state: JoueursSearchScreenState = {
    joueurs: [],
  }

  //On récupere la liste des joueurs
  loadPlayers = () => {
    joueurApiService.getAllPlayers().then((joueurs) => {
      this.setState({ joueurs })
    })
  }

  //Chargement des données pour l'affichage
  componentDidMount(): void {
    this.loadPlayers()
  }
  //Fonction qui permet d'afficher la liste des joueurs avec un nom tapé dans la barre de recherche
  onInput = (text: string) => {
    joueurApiService
      .getAllPlayersByName(text)
      .then((joueurs: Array<Joueur>) => {
        this.setState({ joueurs })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Entrez le nom d'un joueur"
          onSubmitEditing={this.onInput}
        />
        <JoueursList
          joueurs={this.state.joueurs}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
})
