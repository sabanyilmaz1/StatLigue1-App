import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationProps } from '../navigation/app-stacks'
import Joueur from '../services/joueur.model'

interface JoueurItemProps extends NavigationProps {
  joueur: Joueur
}

export default class JoueurItem extends Component<JoueurItemProps> {
  render() {
    const { joueur, navigation } = this.props
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.navigate('Joueur', {
              joueurId: joueur.joueurId,
            })
          }}
        >
          <Text style={styles.text}>{joueur.nomJoueur}</Text>
          <Text style={styles.text}>{joueur.prenomJoueur}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#C4C4C4',
    marginBottom: 10,
    width: '100%',
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'SpaceMono-Bold',
  },
})
