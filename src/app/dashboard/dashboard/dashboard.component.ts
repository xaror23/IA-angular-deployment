import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../../shared/api-call.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [ ApiCallService ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() gestionnaires =[];
  @Input() members = [];
  @Input() nameConseiller = [];
  nameRoute = "";
  prenomRoute = "";
  role = "";

  constructor(private apiCall : ApiCallService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const prenom = urlParams.get('prenom');
    this.role = urlParams.get('role');


    if(this.role === "Gestionnaire"){
        this.apiCall.getMemberForManager([name, prenom]).subscribe(resp => {
          debugger;
        for(let i = 0 ; i < resp.gestionnaires.length; i++){

          let gestionnaire = resp.gestionnaires[i].name;
          let membersForGestionnaires = [];

          for(let j = 0; j < resp.gestionnaires[i].members.length; j++) {
            const conseillerName = resp.gestionnaires[i].members[j].conseiller.split(",");
  
            let member = { conseillername : resp.gestionnaires[i].members[j].conseiller, status : resp.gestionnaires[i].members[j].status, prenom : conseillerName[1], name : conseillerName[0] }
            membersForGestionnaires.push(member);    
          }
          
          this.gestionnaires.push({ name : gestionnaire, members : membersForGestionnaires})
  
        };
      });
    } else if (this.role === 'Administration') {
        this.apiCall.getMemberForAdministration().subscribe(resp => {
          debugger;
        for(let i = 0 ; i < resp.gestionnaires.length; i++){

          let gestionnaire = resp.gestionnaires[i].name;
          let membersForGestionnaires = [];

          for(let j = 0; j < resp.gestionnaires[i].members.length; j++) {
            const conseillerName = resp.gestionnaires[i].members[j].conseiller.split(",");

            let member = { conseillername : resp.gestionnaires[i].members[j].conseiller, status : resp.gestionnaires[i].members[j].status, prenom : conseillerName[1], name : conseillerName[0] }
            membersForGestionnaires.push(member);    
          }
          
          this.gestionnaires.push({ name : gestionnaire, members : membersForGestionnaires})

        };
      });
    }

  

    }

    goToCustomerHistory(member)
    {
        this.router.navigate(
            ['/form'], {queryParams: { name : member.name, prenom : member.prenom, role : this.role }} );
    }    

  }



