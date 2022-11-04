import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { NavigationProps } from '../navigation/app-stacks'
import Match from '../services/match.model'
import MatchItem from './MatchItem'

interface MatchsListProps extends NavigationProps {
  matchs: Array<Match>
}

export default class MatchsList extends Component<MatchsListProps> {
  render() {
    if (this.props.matchs?.length > 0)
      return (
        <FlatList<Match>
          style={styles.matchList}
          data={this.props.matchs}
          keyExtractor={(joueur) => joueur.matchId.toString()}
          renderItem={({ item }) => {
            return (
              <MatchItem match={item} navigation={this.props.navigation} />
            )
          }}
        />
      )
    else
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Chargement des matchs!</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  matchList: {
    flex: 1,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})
