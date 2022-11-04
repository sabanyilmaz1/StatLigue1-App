import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MatchApiService from '../services/matchApi.service'
import { RouteProp } from '@react-navigation/core'
import { RootStackParamList, NavigationProps } from '../navigation/app-stacks'
import MatchsList from '../components/MatchsList'
import Match from '../services/match.model'
import * as Font from 'expo-font'

interface MatchEquipeScreenState {
  matchs: Array<Match>
}
interface MatchEquipeScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, 'MatchEquipe'>
}

export default class MatchEquipeSearchScreen extends Component<
  MatchEquipeScreenProps,
  MatchEquipeScreenState
> {
  state: MatchEquipeScreenState = {
    matchs: [],
  }

  // Fonction qui recupere tous les matchs d'une equipe via son identifiant
  loadMatchs = (id) => {
    MatchApiService.getAllMatchsByTeam(id).then((matchs) => {
      this.setState({ matchs })
    })
  }

  componentDidMount(): void {
    //On recupere l'identifiant via la vue precedente "EquipesScreen"
    const idEquipe = this.props.route.params.equipeId
    //On charge les données matchs pour l'affichages
    this.loadMatchs(idEquipe)
    //Changement du nom de la vue
    this.props.navigation.setOptions({
      title: `Les matchs`,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.MatchsContainer}>
          <MatchsList
            matchs={this.state.matchs}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  MatchsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
})
