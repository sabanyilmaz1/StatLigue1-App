import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { RouteProp } from '@react-navigation/core'
import { RootStackParamList, NavigationProps } from '../navigation/app-stacks'
import Equipe from '../services/equipe.model'
import equipeApiService from '../services/equipeApi.service'
import { logoImages } from '../logoImages'
import joueurApiService from '../services/joueurApi.service'
import Joueur from '../services/joueur.model'
import JoueurEquipeList from '../components/joueurEquipeList'

interface EquipeScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, 'Equipe'>
}

interface EquipesSearchScreenState {
  equipe: Equipe
  isLoading: boolean
  joueurs: Array<Joueur>
}

export default class EquipeScreen extends Component<
  EquipeScreenProps,
  EquipesSearchScreenState
> {
  state: EquipesSearchScreenState = {
    isLoading: true,
    equipe: null,
    joueurs: [],
  }

  // Fonction qui récupère des joueurs de l'equipe cliquée avec un appel à l'API
  loadPlayers = (id) => {
    joueurApiService.getAllPlayersByTeam(id).then((joueurs) => {
      this.setState({ joueurs })
    })
  }

  componentDidMount() {
    //Recuperation de l'identifiant de l'equipe cliquée à la vue AllEquipesScreen
    const idEquipe = this.props.route.params.equipeId
    //Apres avoir recuperer l'id, on charge la liste de joueurs de cette equipe
    this.loadPlayers(idEquipe)
    // On recupere les informations sur l'equipe via son identifiant
    equipeApiService.getTeamById(idEquipe).then((equipe: Equipe) => {
      // Update screen title
      this.props.navigation.setOptions({
        title: `${equipe.nomEquipe}`,
      })

      this.setState({ equipe, isLoading: false })
    })
  }

  render() {
    const { navigation } = this.props
    if (this.state.isLoading) return <ActivityIndicator />
    else {
      const { equipe } = this.state

      return (
        <View style={styles.container}>
          <View style={styles.firstSubContainer}>
            <Image
              style={styles.image}
              source={logoImages.require[equipe.equipeId]}
            />
            <Text style={styles.classementAndPointText}>
              Classement : {equipe.classementEquipe}
            </Text>
            <Text style={styles.classementAndPointText}>
              {equipe.nombrePoints} points
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statContainer}>
              <Text style={styles.victoryText}>Victoire</Text>
              <Text style={styles.statsText}>{equipe.nombreVictoire}</Text>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.drawText}>Nul</Text>
              <Text style={styles.statsText}>{equipe.nombreNul}</Text>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.lossText}>Defaite</Text>
              <Text style={styles.statsText}>{equipe.nombreDefaite}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('MatchEquipe', {
                  equipeId: equipe.equipeId,
                })
              }}
            >
              <Text>Voir les matchs</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.statsText}>Effectifs</Text>
          <JoueurEquipeList
            joueurs={this.state.joueurs}
            navigation={this.props.navigation}
          />

          <View>
            <Text style={styles.coachText}>Coach : {equipe.nomEntraineur}</Text>
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstSubContainer: {
    flex: 1,
    alignItems: 'center',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 150,
  },
  statContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 35,
    marginBottom: 35,
  },
  coachText: {
    fontSize: 30,
    marginBottom: 70,
    marginTop: 30,
    textAlign: 'center',
    fontFamily: 'SpaceMono-Bold',
  },

  classementAndPointText: {
    fontSize: 26,
    marginLeft: 15,
    marginRight: 15,
    fontFamily: 'SpaceMono-Bold',
  },
  statsText: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'SpaceMono-Bold',
  },
  victoryText: {
    fontSize: 26,
    textAlign: 'center',
    color: 'green',
    fontFamily: 'SpaceMono-Bold',
  },
  drawText: {
    fontSize: 26,
    textAlign: 'center',
    color: 'orange',
    fontFamily: 'SpaceMono-Bold',
  },
  lossText: {
    fontSize: 26,
    textAlign: 'center',
    color: 'red',
    fontFamily: 'SpaceMono-Bold',
  },
})
