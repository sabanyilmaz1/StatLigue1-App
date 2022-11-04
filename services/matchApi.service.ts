import Match from './match.model'

const rootEndpoint = 'https://enscyilmazsaracco.azurewebsites.net/api/MatchApi'

export interface match {
  id: number
  equipeDId: number
  equipeEId: number
  scoreD: number
  scoreE: number
  dateMatch: string
}

class MatchDbApi {
  getAllMatchs(): Promise<Array<Match>> {
    return this.fetchFromApi(`${rootEndpoint}`).then((matchs) =>
      this.createMatchs(matchs)
    )
  }

  getAllMatchsByTeam(idEquipe: number): Promise<Array<Match>> {
    return this.fetchFromApi(`${rootEndpoint}/Matchs/${idEquipe}`).then(
      (matchs) => this.createMatchs(matchs)
    )
  }

  private fetchFromApi(query: string): Promise<Array<match>> {
    return fetch(query)
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse || [])
      .catch((error) => {
        console.error(error)
      })
  }
  //Version fetchfromApi pour recuperer un element dans notre liste de données
  private createMatch(match: match): Match {
    return new Match(
      match.id,
      match.equipeDId,
      match.equipeEId,
      match.scoreD,
      match.scoreE,
      match.dateMatch
    )
  }

  private createMatchs(matchs: Array<match>): Array<Match> {
    // Création de données matchs
    return matchs.map((match) => this.createMatch(match))
  }
}
export default new MatchDbApi()
