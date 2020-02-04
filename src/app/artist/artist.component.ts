import { Component, OnInit } from '@angular/core';
import { Type } from '../item/item' 

@Component({
  selector: 'ns-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  items = Type.artist

  constructor() { }

  ngOnInit() {
    
  }

}
