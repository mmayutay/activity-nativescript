import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-color-gridding',
  templateUrl: './color-gridding.component.html',
  styleUrls: ['./color-gridding.component.css']
})
export class ColorGriddingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  details(value){
    alert(value)
  }

}
