import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/member';
import { Formulaire } from 'src/app/formulaire';
import { Evaluateur } from 'src/app/evaluateur';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiCallService } from '../../shared/api-call.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  providers: [ ApiCallService ],
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  @Input() member : Member;
  @Input() defiImportant : boolean;
  @Input() defiMinime : boolean;
  @Input() defiInteressant : boolean;

  defiExperienceCategorie : boolean;

  evaluationForm : FormGroup;

  critereEvaluation : Array<string>;

  Identification : any;

  role : any;

  constructor(private apiCall : ApiCallService) { 
    this.member = new Member(new Formulaire(), "Xavier Roux Racine", "Consultant", new Evaluateur(), null);
  }

  ngOnInit() {


    this.critereEvaluation = [ "Choisir un niveau", "NA - Non applicable", "DNA - Dépasse nettement les attentes", "SA - Surpasse les attentes",
    "RA - Répond aux attentes", "DA - Doit s'améliorer", "DAN - Doit s'améliorer nettement"  ];

    this.Identification = {
      NomMembre : "",
      RoleMembre : "",
      MandatEnCours : "",
      MandatFin : "",
      EvaluateurIA : "",
      RoleEvaluateurIA : "",
      RepresentantCGI : "",
      RoleRepresentantCGI : "",
      SignatureMembre : "",
      SignatureEvaluateurIA : "",
      SignatureGestionnaireCGI :"",
      dateSignatureMembre : "",
      dateSignatureEvaluateurIA : "",
      dateSignatureGestionnaireCGI : ""
    }

   this.evaluationForm = new FormGroup({
      MandatEnCours : new FormControl(""),
      MandatFin : new FormControl(""),
      ClientReprendreMembre : new FormControl(""),
      Context : new FormControl(""),
      CommentaireMembre : new FormControl(""),
      CommentaireEvaluateur : new FormControl(""),
      DefiExperience : new FormControl(""),
      AutonomieAuto : new FormControl(""),
     AutonomieIA : new FormControl(""),
     AutonomieCommentaires : new FormControl(""),
     CollaborationAuto : new FormControl(""),
     CollaborationIA : new FormControl(""),
     CollaborationCommentaires : new FormControl(""),
     CommunicationAuto : new FormControl(""),
     CommunicationIA : new FormControl(""),
     CommunicationCommentaires : new FormControl(""),
     CompetenceAuto : new FormControl(""),
     CompetenceIA : new FormControl(""),
     CompetenceCommentaires : new FormControl(""),
     QualiteAuto : new FormControl(""),
     QualiteIA : new FormControl(""),
     QualiteCommentaires : new FormControl(""),
     SignatureMembre : new FormControl(""),
     SignatureEvaluateurIA : new FormControl(""),
     SignatureGestionnaireCGI : new FormControl(""),
     DefiMinime : new FormControl(""),
     DefiInteressant : new FormControl(""),
     DefiImportant  : new FormControl(""),
     RepriseDuClientParLeMembre  : new FormControl(""),
     defiExperienceCategorie: new FormControl(""),
     Demarcation : new FormControl("")
   });

   const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const prenom = urlParams.get('prenom');
  this.role = urlParams.get('role');

    this.apiCall.getHelloWord([name, prenom])
      .subscribe( resp => {
        console.log("yeah")
        console.log(resp);

        this.Identification = {
          NomMembre : resp.NomMembre,
          RoleMembre : resp.RoleMembre,
          MandatEnCours : resp.MandatEnCours,
          MandatFin : resp.MandatFin,
          EvaluateurIA : resp.EvaluateurIA,
          RoleEvaluateurIA : resp.RoleEvaluateurIA,
          RepresentantCGI : resp.RepresentantCGI,
          RoleRepresentantCGI : resp.RoleRepresentantCGI,
          SignatureMembre : resp.SignatureMembre,
          SignatureEvaluateurIA : resp.SignatureEvaluateurIA,
          SignatureGestionnaireCGI : resp.SignatureGestionnaireCGI,
          dateSignatureMembre : resp.dateSignatureMembre,
          dateSignatureEvaluateurIA : resp.dateSignatureEvaluateurIA,
          dateSignatureGestionnaireCGI : resp.dateSignatureGestionnaireCGI,
          Context : resp.Context,
          CommentaireMembre : resp.CommentaireMembre,
          CommentaireEvaluateur : resp.CommentaireEvaluateur,
          DefiExperience : resp.DefiExperience,
          AutonomieAuto : resp.AutonomieAuto,
         AutonomieIA : resp.AutonomieIA,
         AutonomieCommentaires : resp.AutonomieCommentaires,
         CollaborationAuto : resp.CollaborationAuto,
         CollaborationIA : resp.CollaborationIA,
         CollaborationCommentaires : resp.CollaborationCommentaires,
         CommunicationAuto : resp.CommunicationAuto,
         CommunicationIA : resp.CommunicationIA,
         CommunicationCommentaires : resp.CommunicationCommentaires,
         CompetenceAuto : resp.CompetenceAuto,
         CompetenceIA : resp.CompetenceIA,
         CompetenceCommentaires : resp.CompetenceCommentaires,
         QualiteAuto : resp.QualiteAuto,
         QualiteIA : resp.QualiteIA,
         QualiteCommentaires : resp.QualiteCommentaires,
         defiExperienceCategorie : resp.defiExperienceCategorie,
         Demarcation : resp.Demarcation,
         RepriseDuClientParLeMembre : resp.RepriseDuClientParLeMembre
        }


        this.evaluationForm = new FormGroup({
          RepriseDuClientParLeMembre : new FormControl(this.StringtoBoolean(resp.RepriseDuClientParLeMembre)),
          Context : new FormControl(resp.Context),
          CommentaireMembre : new FormControl(resp.CommentaireMembre),
          CommentaireEvaluateur : new FormControl(resp.CommentaireEvaluateur),
          DefiExperience : new FormControl(resp.DefiExperience),
          AutonomieAuto : new FormControl(resp.AutonomieAuto),
         AutonomieIA : new FormControl(resp.AutonomieIA),
         AutonomieCommentaires : new FormControl(resp.AutonomieCommentaires),
         CollaborationAuto : new FormControl(resp.CollaborationAuto),
         CollaborationIA : new FormControl(resp.CollaborationIA),
         CollaborationCommentaires : new FormControl(resp.CollaborationCommentaires),
         CommunicationAuto : new FormControl(resp.CommunicationAuto),
         CommunicationIA : new FormControl(resp.CommunicationIA),
         CommunicationCommentaires : new FormControl(resp.CommunicationCommentaires),
         CompetenceAuto : new FormControl(resp.CompetenceAuto),
         CompetenceIA : new FormControl(resp.CompetenceIA),
         CompetenceCommentaires : new FormControl(resp.CompetenceCommentaires),
         QualiteAuto : new FormControl(resp.QualiteAuto),
         QualiteIA : new FormControl(resp.QualiteIA),
         QualiteCommentaires : new FormControl(resp.QualiteCommentaires),
          defiExperienceCategorie: new FormControl(resp.defiExperienceCategorie),
          Demarcation : new FormControl(resp.Demarcation)
        })
      })
  }

  onSubmit(){

    console.log(this.evaluationForm.value);

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const prenom = urlParams.get('prenom');

    const member = {
      NomMembre : this.Identification.NomMembre,
      RoleMembre : this.Identification.RoleMembre,
      MandatEnCours : this.Identification.MandatEnCours,
      MandatFin : this.Identification.MandatFin,
      EvaluateurIA : this.Identification.EvaluateurIA,
      RoleEvaluateurIA : this.Identification.RoleEvaluateurIA,
      RepresentantCGI : this.Identification.RepresentantCGI,
      RoleRepresentantCGI : this.Identification.RoleRepresentantCGI,
      RepriseDuClientParLeMembre : this.booleanToString(this.evaluationForm.value.RepriseDuClientParLeMembre),
      Context : this.evaluationForm.value.Context,
      CommentaireMembre : this.evaluationForm.value.CommentaireMembre,
      CommentaireEvaluateur : this.evaluationForm.value.CommentaireEvaluateur,
      DefiExperience : this.evaluationForm.value.DefiExperience,
      AutonomieAuto : this.evaluationForm.value.AutonomieAuto,
     AutonomieIA : this.evaluationForm.value.AutonomieIA,
     AutonomieCommentaires : this.evaluationForm.value.AutonomieCommentaires,
     CollaborationAuto : this.evaluationForm.value.CollaborationAuto,
     CollaborationIA : this.evaluationForm.value.CollaborationIA,
     CollaborationCommentaires : this.evaluationForm.value.CollaborationCommentaires,
     CommunicationAuto : this.evaluationForm.value.CommunicationAuto,
     CommunicationIA : this.evaluationForm.value.CommunicationIA,
     CommunicationCommentaires : this.evaluationForm.value.CommunicationCommentaires,
     CompetenceAuto : this.evaluationForm.value.CompetenceAuto,
     CompetenceIA : this.evaluationForm.value.CompetenceIA,
     CompetenceCommentaires : this.evaluationForm.value.CompetenceCommentaires,
     QualiteAuto : this.evaluationForm.value.QualiteAuto,
     QualiteIA : this.evaluationForm.value.QualiteIA,
     QualiteCommentaires : this.evaluationForm.value.QualiteCommentaires,
     defiExperienceCategorie : this.evaluationForm.value.defiExperienceCategorie,
     SignatureMembre : this.getSignatureMembre(),
     SignatureEvaluateurIA : this.getSignatureEvaluateur(),
     SignatureGestionnaireCGI : this.getSignatureGestionnaire(),
     dateSignatureMembre : this.getDateMembre(),
     dateSignatureEvaluateurIA : this.getDateEvaluateur(),
     dateSignatureGestionnaireCGI : this.getDateGestionnaire(),
     Demarcation : this.evaluationForm.value.Demarcation

    }

    this.apiCall.changetheForm(member, [name, prenom]);

    
  }



  getSignatureEvaluateur() {
    if(this.role) {
      return this.Identification.EvaluateurIA;
    } else{
      return this.Identification.SignatureEvaluateurIA;
    }
  }

  getSignatureMembre(){
      return this.Identification.NomMembre;
  }

  getDateMembre() {
    if(!this.role) {
      return this.getDate();
    } else {
      return this.Identification.dateSignatureMembre;
    }
  }

  getDateEvaluateur() {
    if(this.role) {
      return this.getDate();
    } else {
      return this.Identification.dateSignatureEvaluateurIA;
    }
  }

  getSignatureGestionnaire() {
    if(this.role) {
      return this.Identification.RepresentantCGI;
    } else {
      return this.Identification.SignatureGestionnaireCGI;
    }
  }

  getDateGestionnaire(){
    if(this.role) {
      return this.getDate();
    } else {
      return this.Identification.dateSignatureGestionnaireCGI;
    }
  }

  getDate(){
    var d = new Date()
    d.setMonth(d.getMonth());
    var dateString = new Date(d);

    return dateString.toISOString().slice(0,10);
  }

  printComponent() {

      this.Identification.dateSignatureMembre = this.evaluationForm.value.dateSignatureMembre;
      this.Identification.dateSignatureEvaluateurIA = this.evaluationForm.value.dateSignatureEvaluateurIA;
      this.Identification.dateSignatureGestionnaireCGI =this.evaluationForm.value.dateSignatureGestionnaireCGI;
      this.Identification.Context = this.evaluationForm.value.Context;
      this.Identification.CommentaireMembre = this.evaluationForm.value.CommentaireMembre;
      this.Identification.CommentaireEvaluateur = this.evaluationForm.value.CommentaireEvaluateur;
      this.Identification.DefiExperience = this.evaluationForm.value.DefiExperience;
      this.Identification.AutonomieAuto = this.evaluationForm.value.AutonomieAuto;
      this.Identification.AutonomieIA = this.evaluationForm.value.AutonomieIA;
      this.Identification.AutonomieCommentaires = this.evaluationForm.value.AutonomieCommentaires;
      this.Identification.CollaborationAuto = this.evaluationForm.value.CollaborationAuto;
      this.Identification.CollaborationIA = this.evaluationForm.value.CollaborationIA;
      this.Identification.CollaborationCommentaires = this.evaluationForm.value.CollaborationCommentaires;
      this.Identification.CommunicationAuto = this.evaluationForm.value.CommunicationAuto;
      this.Identification.CommunicationIA = this.evaluationForm.value.CommunicationIA;
      this.Identification.CommunicationCommentaires = this.evaluationForm.value.CommunicationCommentaires;
      this.Identification.CompetenceAuto = this.evaluationForm.value.CompetenceAuto;
      this.Identification.CompetenceIA = this.evaluationForm.value.CompetenceIA;
      this.Identification.CompetenceCommentaires = this.evaluationForm.value.CompetenceCommentaires;
      this.Identification.QualiteAuto = this.evaluationForm.value.QualiteAuto;
     this.Identification.QualiteIA = this.evaluationForm.value.QualiteIA;
     this.Identification.QualiteCommentaires = this.evaluationForm.value.QualiteCommentaires;
     this.Identification.defiExperienceCategorie = this.evaluationForm.value.defiExperienceCategorie;
     this.Identification.Demarcation = this.evaluationForm.value.Demarcation;
     this.Identification.RepriseDuClientParLeMembre = this.booleanToString(this.evaluationForm.value.RepriseDuClientParLeMembre);


    window.print();

}

StringtoBoolean = (value) => {
  if(value === "Oui") {
    return true;
  } else{
    return false;
  }
}

booleanToString = (value) => {
  if(value){
    return "Oui";
  } else {
    return "Non";
  }
}

}
