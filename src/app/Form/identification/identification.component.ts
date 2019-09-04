import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/member';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  @Input()  membre: Member;


  constructor() { }

  ngOnInit() {
  }

}
