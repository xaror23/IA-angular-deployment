import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/member';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.css']
})
export class SignaturesComponent implements OnInit {

  @Input() member : Member;


  constructor() { }

  ngOnInit() {
  }

}
