import { Component, OnInit } from '@angular/core';
import {Type} from '../item/item'

@Component({
  selector: 'ns-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {
  items = Type.socceer 

  constructor() { }

  ngOnInit() {
  }

}
