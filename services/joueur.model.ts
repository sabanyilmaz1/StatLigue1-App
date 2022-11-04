export default class Joueur {
  constructor(
    public joueurId: number,
    public equipeId: number,
    public nomJoueur: string,
    public prenomJoueur: string,
    public ageJoueur: number,
    public nationnaliteJoueur: string,
    public tailleJoueur: number,
    public equipe: string,
    public posteJoueur: string,
    public matchJouee: number,
    public cartonRouge: number,
    public cartonJaune: number,
    public butJoueur: number,
    public passeDecisiveJoueur: number
  ) {}
}
