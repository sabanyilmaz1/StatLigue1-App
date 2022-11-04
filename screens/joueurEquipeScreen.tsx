import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import { RouteProp } from '@react-navigation/core'
import { RootStackParamList, NavigationProps } from '../navigation/app-stacks'
import Joueur from '../services/joueur.model'
import joueurApiService from '../services/joueurApi.service'
import { getPicturePlayer } from '../services/getPicturePlayer'
import { equipeIdToEquipe } from '../services/equipeIdToEquipe'

interface JoueurEquipeScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, 'JoueurEquipe'>
}

interface JoueursSearchScreenState {
  joueur: Joueur
  isLoading: boolean
  imagePath: string
}

export default class JoueurScreen extends Component<
  JoueurEquipeScreenProps,
  JoueursSearchScreenState
> {
  state: JoueursSearchScreenState = {
    isLoading: true,
    joueur: null,
    imagePath: '',
  }
  componentDidMount() {
    //On recupere l'identifiant du joueur cliqué à la vue EquipeScreen
    const idJoueur = this.props.route.params.joueurId
    //On recupere les informations sur ce joueur
    joueurApiService.getPlayersById(idJoueur).then((joueur: Joueur) => {
      // Changement du nom de la vue JoueurEquipeScreen
      this.props.navigation.setOptions({
        title: `${joueur.nomJoueur}${' '}${joueur.prenomJoueur}`,
      })
      this.setState({ joueur, isLoading: false })
    })
  }

  componentDidUpdate() {
    //On recupere en plus l'image du joueur via une autre API à travers cette fonction
    if (this.state.imagePath === '') {
      getPicturePlayer(
        this.state.joueur.prenomJoueur,
        this.state.joueur.nomJoueur
      ).then((imagePath) => this.setState({ imagePath }))
    }
  }

  render() {
    if (this.state.isLoading) return <ActivityIndicator />
    else {
      const { joueur, imagePath } = this.state
      const nomEquipe = equipeIdToEquipe(joueur.equipeId)

      return imagePath ? (
        <View style={styles.container}>
          <View>
            <View style={styles.containerHeader}>
              <View style={styles.header}>
                <Text style={styles.infoText}>{joueur.ageJoueur} ans </Text>
                <Image
                  style={styles.tinyLogo}
                  source={{ uri: this.state.imagePath }}
                />
                <Text style={styles.infoText}>{joueur.tailleJoueur} cm</Text>
              </View>
              <Text style={styles.infoText2}>{joueur.nationnaliteJoueur}</Text>
              <Text style={styles.infoText2}>{joueur.posteJoueur}</Text>
              <Text style={styles.infoText2}>{nomEquipe}</Text>
            </View>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statContainer}>
              <Image
                style={styles.image}
                source={require('../assets/match.png')}
              />
              <Text style={styles.statText}> Match : {joueur.matchJouee}</Text>
            </View>

            <View style={styles.statContainer}>
              <Image
                style={styles.image}
                source={require('../assets/but.png')}
              />
              <Text style={styles.statText}> But : {joueur.butJoueur}</Text>
            </View>

            <View style={styles.statContainer}>
              <Image
                style={styles.image}
                source={require('../assets/passe.png')}
              />
              <Text style={styles.statText}>
                {' '}
                Passe décisive : {joueur.passeDecisiveJoueur}
              </Text>
            </View>

            <View style={styles.statContainer}>
              <Image
                style={styles.image}
                source={require('../assets/jaune.png')}
              />
              <Text style={styles.statText}>
                {' '}
                Carton jaune : {joueur.cartonJaune}
              </Text>
            </View>

            <View style={styles.statContainer}>
              <Image
                style={styles.image}
                source={require('../assets/rouge.png')}
              />
              <Text style={styles.statText}>
                {' '}
                Carton rouge : {joueur.cartonRouge}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    height: '100%',
    //alignItems: 'center',
  },
  containerHeader: { alignItems: 'center' },
  header: {
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  image: {
    width: 50,
    height: 50,
  },
  instructionsTitle: { fontSize: 22, marginBottom: 10 },
  infoText: {
    fontSize: 30,
    fontFamily: 'SpaceMono-Bold',
  },
  infoText2: {
    fontSize: 30,
    fontFamily: 'SpaceMono-Bold',
  },
  statText: {
    fontSize: 20,
    marginLeft: 50,
    marginTop: 10,
    fontFamily: 'SpaceMono-Bold',
  },
  statsContainer: {
    marginLeft: 20,
    marginTop: 40,
  },
  statContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
})
