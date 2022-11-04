import Equipe from './equipe.model'

const rootEndpoint = 'https://enscyilmazsaracco.azurewebsites.net/api/EquipeApi'

export interface equipe {
  id: number
  nomEquipe: string
  acronymeClub: string
  nomEntraineur: string
  nombrePoints: number
  nombreVictoire: number
  nombreDefaite: number
  nombreNul: number
  differenceDeBut: number
  classementEquipe: number
}

class EquipeDbApi {
  getTeamById(id: number): Promise<Equipe> {
    return this.fetchFromApi2(`${rootEndpoint}/${id}`).then((equipe) =>
      this.createEquipe(equipe)
    )
  }

  getAllTeams(): Promise<Array<Equipe>> {
    return this.fetchFromApi(`${rootEndpoint}`).then((equipes) =>
      this.createEquipes(equipes)
    )
  }

  private fetchFromApi(query: string): Promise<Array<equipe>> {
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
  private fetchFromApi2(query: string): Promise<equipe> {
    return fetch(query)
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse || [])
      .catch((error) => {
        console.error(error)
      })
  }

  private createEquipe(equipe: equipe): Equipe {
    return new Equipe(
      equipe.id,
      equipe.nomEquipe,
      equipe.acronymeClub,
      equipe.nomEntraineur,
      equipe.nombrePoints,
      equipe.nombreVictoire,
      equipe.nombreDefaite,
      equipe.nombreNul,
      equipe.differenceDeBut,
      equipe.classementEquipe
    )
  }

  private createEquipes(equipes: Array<equipe>): Array<Equipe> {
    // Création de données equipes
    return equipes.map((equipe) => this.createEquipe(equipe))
  }
}

export default new EquipeDbApi()
