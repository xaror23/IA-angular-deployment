import { Input, Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { Formulaire } from '../formulaire';
import { Evaluateur } from '../evaluateur';

@Component({
  selector: 'app-upload-file-window',
  templateUrl: './upload-file-window.component.html',
  styleUrls: ['./upload-file-window.component.css']
})
export class UploadFileWindowComponent implements OnInit {

  @Input() member : Member;

  constructor() { }


  ngOnInit() {
    this.member = new Member(new Formulaire(), "Xavier Roux Racine", "Administrateur", new Evaluateur(), null )

  }

  isAdmin(){
    if(this.member.role === 'Administrateur'){
      return true;
    } else{
      return false;
    }
  }

  isConsultant(){
    if(this.member.role === 'Consultant'){
      return true;
    } else{
      return false;
    }
  }  

  isGestionnaire(){
    if(this.member.role === 'Gestionnaire'){
      return true;
    } else{
      return false;
    }    
  }


}
