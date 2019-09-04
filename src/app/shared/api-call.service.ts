import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class ApiCallService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private _url = environment.url;

  constructor(private http : HttpClient) { }

  getHelloWord(parameter) {
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('name', parameter[0]);
    params = params.append('prenom', parameter[1]);


    return this.http.get<any>(this._url + "/api/member", { params: params });
  }

  getMemberForAdministration(){
    return this.http.get<any>(this._url + "/api/administration");    
  }

  getMemberForManager(parameter){
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('name', parameter[0]);
    params = params.append('prenom', parameter[1]);


    return this.http.get<any>(this._url + "/api/manager", { params: params });    
  }


  changetheForm (form: any, parameter : any): any {

    var data = '{ "NomMembre" : "' + form.NomMembre + '","RoleMembre" :  "' + form.RoleMembre + '","MandatEnCours" :  ' + form.MandatEnCours + ',"MandatFin" :  ' + form.MandatFin + ',"EvaluateurIA" :  "' + form.EvaluateurIA + '","RoleEvaluateurIA" :  "' + form.RoleEvaluateurIA + '","RepresentantCGI" :  "' + form.RepresentantCGI + '","RoleRerpesentantCGI" :  "' + form.RoleRerpesentantCGI + '","ClientReprendreMembre" :  "' + form.ClientReprendreMembre + '","Context" :  "' + form.Context + '","CommentaireMembre" :  "' + form.CommentaireMembre + '","CommentaireEvaluateur" :  "' + form.CommentaireEvaluateur + '","DefiExperience" :  "' + form.DefiExperience + '","AutonomieAuto" :  "' + form.AutonomieAuto + '","AutonomieIA" :  "' + form.AutonomieIA + '","AutonomieCommentaires" :  "' + form.AutonomieCommentaires + '","CollaborationAuto" :  "' + form.CollaborationAuto + '","CollaborationIA" :  "' + form.CollaborationIA + '","CollaborationCommentaires" :  "' + form.CollaborationCommentaires + '","CommunicationAuto" :  "' + form.CommunicationAuto + '","CommunicationIA" :  "' + form.CommunicationIA + '","CommunicationCommentaires" : "' + form.CommunicationCommentaires + '", "CompetenceAuto" :  "' + form.CompetenceAuto + '","CompetenceIA" :  "' + form.CompetenceIA + '","CompetenceCommentaires" : "' + form.CompetenceCommentaires + '","QualiteAuto" :  "' + form.QualiteAuto + '","QualiteIA" :  "' + form.QualiteIA + '","QualiteCommentaires" : "' + form.QualiteCommentaires + '", "defiExperienceCategorie": "' + form.defiExperienceCategorie + '","SignatureMembre" : "' + form.SignatureMembre + '", "SignatureEvaluateurIA" : "' + form.SignatureEvaluateurIA + '", "SignatureGestionnaireCGI" : "' + form.SignatureGestionnaireCGI + '" , "dateSignatureMembre" : "' + form.dateSignatureMembre + '", "dateSignatureEvaluateurIA" : "' + form.dateSignatureEvaluateurIA + '", "dateSignatureGestionnaireCGI" : "' + form.dateSignatureGestionnaireCGI + '",  "Demarcation" : "' + form.Demarcation + '", "RepriseDuClientParLeMembre" : "' + form.RepriseDuClientParLeMembre +'" }'
    console.log(data[94]);
    const json = JSON.parse(data);

    let params = new HttpParams();
    params = params.append('name', parameter[0]);
    params = params.append('prenom', parameter[1]);

    window.location.href = window.location.href;

    return this.http.post<any>(this._url + "/api/member/form?name=" + parameter[0] + "&prenom=" + parameter[1], json, this.httpOptions).subscribe();
  }

  login(form : any) : any {

    var data = '{ "email" : "' + form.username + '", "password" : "' + form.password + '"}'
    const json = JSON.parse(data);

    return this.http.post<any>(this._url + "/api/login", json, this.httpOptions);

  }


}
