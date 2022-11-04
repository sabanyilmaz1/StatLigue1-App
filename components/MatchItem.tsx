import React, { Component,useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native'
import { NavigationProps } from '../navigation/app-stacks'
import Match from '../services/match.model'
import {equipeIdtoAcronymeClub} from '../services/equipeIdtoAcronymeClub'
import {logoImages} from '../logoImages'



interface MatchItemProps extends NavigationProps {
  match: Match
}

export default class MatchItem extends Component<MatchItemProps> {

  
  render() {
    const { match} = this.props
    const nomEquipeD=equipeIdtoAcronymeClub(match.equipeDId)
    const nomEquipeE=equipeIdtoAcronymeClub(match.equipeEId)
    return (
      <View style={styles.container}>
          <Text style={styles.textEquipeD}>{nomEquipeD}</Text>
          <Image style={styles.homeLogo} source={logoImages.require[match.equipeDId]} />
          <Text style={styles.text}>{match.scoreD}  -</Text>
          <Text style={styles.text}>{match.scoreE}</Text>
          <Text style={styles.text}></Text>
          <Image style={styles.homeLogo} source={logoImages.require[match.equipeEId]} />
          <Text style={styles.textEquipeE}>{nomEquipeE}</Text>
          <Text style={styles.textDate}>{new Date(match.dateMatch).toLocaleDateString()} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    backgroundColor:'#C4C4C4',
    marginBottom:10,
    width: '100%',
    
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    fontFamily: 'SpaceMono-Bold',
  },
  textEquipeD:{
    fontSize: 20,
    marginRight:30,
    fontFamily: 'SpaceMono-Bold',
  },
  textEquipeE:{
    fontSize: 20,
    marginLeft:30,
    fontFamily: 'SpaceMono-Bold',
  },
  textDate:{
    fontSize: 12,
    marginLeft:40,
  },
  homeLogo: {
    width: 40,
    height: 40,
  },
})
