import { Formulaire } from "./formulaire";
import { Evaluateur } from './evaluateur';

export class Member {

    formulaire : Formulaire;
    nom : string;
    role : string;
    evaluateur : Evaluateur;
    representantCGI : Member;


    constructor(formulaire : Formulaire, nom : string , role : string, evaluateur : Evaluateur, representantCGI : Member){
        this.formulaire = formulaire;
        this.nom = nom;
        this.role = role;
        this.evaluateur = evaluateur;
        this.representantCGI = representantCGI;

    }


}
