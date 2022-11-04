import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationProps } from '../navigation/app-stacks'
import MatchApiService from '../services/matchApi.service'
import MatchsList from '../components/MatchsList'
import Match from '../services/match.model'
import * as Font from 'expo-font'

interface AllMatchsScreenState {
  matchs: Array<Match>
}

export default class AllMatchsSearchScreen extends Component<
  NavigationProps,
  AllMatchsScreenState
> {
  state: AllMatchsScreenState = {
    matchs: [],
  }

  // Récupération des données matchs avec un appel à l'API
  loadMatchs = () => {
    MatchApiService.getAllMatchs().then((matchs) => {
      this.setState({ matchs })
    })
  }
  //Chargement des données matchs
  componentDidMount(): void {
    this.loadMatchs()
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
