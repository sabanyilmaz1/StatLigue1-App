import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { NavigationProps } from '../navigation/app-stacks'
import Equipe from '../services/equipe.model'
import { logoImages } from '../logoImages'

interface EquipeItemProps extends NavigationProps {
  equipe: Equipe
}

export default class EquipeItem extends Component<EquipeItemProps> {
  render() {
    const { equipe, navigation } = this.props
    return (
      <View style={styles.container}>
        <Image
          style={styles.homeLogo}
          source={logoImages.require[equipe.equipeId]}
        />
        <TouchableOpacity
          style={styles.container}
          //Redirection vers la vue Equipe avec les details sur l'equipe
          onPress={() => {
            navigation.navigate('Equipe', {
              equipeId: equipe.equipeId,
            })
          }}
        >
          <Text style={styles.text}>{equipe.nomEquipe}</Text>
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
  homeLogo: {
    width: 40,
    height: 40,
  },
  text: {
    marginLeft: 30,
    fontSize: 23,
    fontFamily: 'SpaceMono-Bold',
  },
})
