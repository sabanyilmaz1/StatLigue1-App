export default class Equipe {
  constructor(
    public equipeId: number,
    public nomEquipe: string,
    public acronymeClub: string,
    public nomEntraineur: string,
    public nombrePoints: number,
    public nombreVictoire: number,
    public nombreDefaite: number,
    public nombreNul: number,
    public differenceDeBut: number,
    public classementEquipe: number
  ) {}
}
