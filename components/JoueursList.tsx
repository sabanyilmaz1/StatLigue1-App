import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { NavigationProps } from '../navigation/app-stacks'
import Joueur from '../services/joueur.model'
import JoueurItem from './JoueurItem'

interface JoueursListProps extends NavigationProps {
  joueurs: Array<Joueur>
}

export default class JoueursList extends Component<JoueursListProps> {
  render() {
    if (this.props.joueurs?.length > 0)
      return (
        <FlatList<Joueur>
          style={styles.joueurList}
          data={this.props.joueurs}
          keyExtractor={(joueur) => joueur.joueurId.toString()}
          renderItem={({ item }) => {
            return (
              <JoueurItem joueur={item} navigation={this.props.navigation} />
            )
          }}
        />
      )
    else
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Chargement des joueurs!</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  joueurList: {
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
