import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '~/app/item/item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ns-form-add-player',
  templateUrl: './form-add-player.component.html',
  styleUrls: ['./form-add-player.component.css']
})
export class FormAddPlayerComponent implements OnInit {
  @Input() name: string;
  @Input() usersArray: any
  @Output() needToUpdate = new EventEmitter
  items: any
  tvtext = ""
  tempname: String
  array = []

  constructor(private http: ItemService, private router: Router) { }

  ngOnInit() {
    this.tvtext = this.name
    this.array = this.http.getItems()
    this.items = this.array.filter((data) => {
      if (data.name === this.tempname) {
        return data;
      }
    })
  }
  onclick() {
    this.needToUpdate.emit(this.tvtext)
    this.tvtext = ""
    this.router.navigate(['/'])
  }
}
