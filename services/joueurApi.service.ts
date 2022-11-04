import Joueur from './joueur.model'

const rootEndpoint = 'https://enscyilmazsaracco.azurewebsites.net/api/JoueurApi'

export interface joueur {
  id: number
  equipeId: number
  prenomJoueur: string
  nomJoueur: string
  ageJoueur: number
  nationaliteJoueur: string
  tailleJoueur: number
  equipe: string
  posteJoueur: string
  matchJouee: number
  cartonRouge: number
  cartonJaune: number
  butJoueur: number
  passeDecisiveJoueur: number
}

class JoueurDbApi {
  getPlayersById(id: number): Promise<Joueur> {
    return this.fetchFromApi2(`${rootEndpoint}/${id}`).then((joueurs) =>
      this.createJoueur(joueurs)
    )
  }

  getAllPlayers(): Promise<Array<Joueur>> {
    return this.fetchFromApi(`${rootEndpoint}`).then((joueurs) =>
      this.createJoueurs(joueurs)
    )
  }

  getAllPlayersByName(name: string): Promise<Array<Joueur>> {
    return this.fetchFromApi(`${rootEndpoint}/?name=${name}`).then((joueurs) =>
      this.createJoueurs(joueurs)
    )
  }

  getAllPlayersByTeam(idEquipe: number): Promise<Array<Joueur>> {
    return this.fetchFromApi(`${rootEndpoint}/EquipeId/${idEquipe}`).then(
      (joueurs) => this.createJoueurs(joueurs)
    )
  }

  private fetchFromApi(query: string): Promise<Array<joueur>> {
    return (
      fetch(query)
        // FIXME: JSON parse error when ingredient is not found
        .then((response) => response.json())
        .then((jsonResponse) => jsonResponse || [])
        .catch((error) => {
          console.error(error)
        })
    )
  }
  //Version fetchfromApi pour recuperer un element dans notre liste de données
  private fetchFromApi2(query: string): Promise<joueur> {
    return fetch(query)
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse || [])
      .catch((error) => {
        console.error(error)
      })
  }

  private createJoueur(joueur: joueur): Joueur {
    return new Joueur(
      joueur.id,
      joueur.equipeId,
      joueur.prenomJoueur,
      joueur.nomJoueur,
      joueur.ageJoueur,
      joueur.nationaliteJoueur,
      joueur.tailleJoueur,
      joueur.equipe,
      joueur.posteJoueur,
      joueur.matchJouee,
      joueur.cartonRouge,
      joueur.cartonJaune,
      joueur.butJoueur,
      joueur.passeDecisiveJoueur
    )
  }

  private createJoueurs(joueurs: Array<joueur>): Array<Joueur> {
    // Création de données joueur
    return joueurs.map((joueur) => this.createJoueur(joueur))
  }
}

export default new JoueurDbApi()
