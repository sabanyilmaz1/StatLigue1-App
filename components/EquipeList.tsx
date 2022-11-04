import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { NavigationProps } from '../navigation/app-stacks'
import Equipe from '../services/equipe.model'
import EquipeItem from './EquipeItem'


interface EquipeListProps extends NavigationProps {
  equipes: Array<Equipe>
}

export default class EquipeList extends Component<EquipeListProps> {
  render() {
    if (this.props.equipes?.length > 0)
      return (
        <FlatList<Equipe>
          style={styles.joueurList}
          data={this.props.equipes}
          keyExtractor={(equipe) => equipe.equipeId.toString()}
          renderItem={({ item }) => {
            return (
              <View>
              <EquipeItem equipe={item} navigation={this.props.navigation}  />
              </View>
              
            )
          }}
        />
      )
    else
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Chargement des equipes!</Text>
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
