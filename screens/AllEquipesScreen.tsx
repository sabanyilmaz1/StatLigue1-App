import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationProps } from '../navigation/app-stacks'
import EquipeApiService from '../services/equipeApi.service'
import EquipeList from '../components/EquipeList'
import Equipe from '../services/equipe.model'
import * as Font from 'expo-font'

interface AllEquipesScreenState {
  equipes: Array<Equipe>
}

export default class AllEquipesSearchScreen extends Component<
  NavigationProps,
  AllEquipesScreenState
> {
  state: AllEquipesScreenState = {
    equipes: [],
  }
  // Récupération des données equipes avec un appel à l'API
  loadTeams = () => {
    EquipeApiService.getAllTeams().then((equipes) => {
      this.setState({ equipes })
    })
  }
  //Chargement des données equipes une fois la vue affichée
  componentDidMount(): void {
    this.loadTeams()
  }

  render() {
    return (
      <View style={styles.container}>
        <EquipeList
          equipes={this.state.equipes}
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
