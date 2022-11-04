import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { RouteProp } from '@react-navigation/core'
import { RootStackParamList, NavigationProps } from '../navigation/app-stacks'
import * as Font from 'expo-font'

interface HomeScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, 'Home'>
}

export default class HomeScreen extends Component<HomeScreenProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.homeLogo}
          source={require('../assets/HomePicture.png')}
        />
        <Text style={styles.presentationTextStyle}>
          Bienvenue dans StatLigue1,
        </Text>
        <Text style={styles.presentationTextStyle}>
          StatLigue1 est une application qui permet de tout savoir sur ton
          championnat préféré ! Des informations sur les équipes jusqu’aux
          statistiques des joueurs ou des résultats des matchs, StatLigue1
          rassemble tout ce que tu dois savoir sur la ligue des talents.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  homeLogo: {
    width: 300,
    height: 200,
  },
  presentationTextStyle: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'SpaceMono-Bold',
  },
})
