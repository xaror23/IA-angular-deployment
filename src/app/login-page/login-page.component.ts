import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../shared/api-call.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [ ApiCallService ],
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  evaluationForm: FormGroup;

  constructor( private apiCall: ApiCallService, private router: Router) { }

  ngOnInit() {

    this.evaluationForm = new FormGroup({
      username : new FormControl(""),
      password : new FormControl("")
    })

  }


  submitLogin(){
    this.apiCall.login(this.evaluationForm.value).subscribe(resp => {
      const member = { name : resp.name.split(",")[0], prenom : resp.name.split(",")[1] };

      if(resp.role === "Gestionnaire"){
        this.linkToDashboard(member);
      } else if (resp.role === "Administration"){
        this.linkToAdministration();
      } else{
        this.linkToForm(member);
      }
    });
  }

  linkToDashboard(member)
  {
    this.router.navigate(['/dashboard'], {queryParams: { name : member.name, prenom : member.prenom, role : "Gestionnaire"}})
  }

  linkToAdministration(){
    this.router.navigate(['/dashboard'], {queryParams: { role : "Administration"}});
  }

  linkToForm(member)
  {
      this.router.navigate(
          ['/form'], {queryParams: { name : member.name, prenom : member.prenom}} );
  }



}
