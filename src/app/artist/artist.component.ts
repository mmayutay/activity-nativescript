import { Component, OnInit } from '@angular/core';
import { userType } from '../item/item' 

@Component({
  selector: 'ns-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  items = userType.artist

  constructor() { }

  ngOnInit() {
    
  }

}
