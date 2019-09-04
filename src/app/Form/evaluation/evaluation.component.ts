import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/member';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  @Input() member : Member;

  constructor() { }

  ngOnInit() {
  }

}
