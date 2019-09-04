import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/member';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {

  @Input() member : Member;

  constructor() { }

  ngOnInit() {
  }

}
