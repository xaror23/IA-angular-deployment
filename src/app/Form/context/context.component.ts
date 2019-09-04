import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/member';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {

  @Input() member : Member;

  constructor() { }

  ngOnInit() {
  }

}
