import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'ns-form-add-player',
  templateUrl: './form-add-player.component.html',
  styleUrls: ['./form-add-player.component.css']
})
export class FormAddPlayerComponent implements OnInit {
  @Input() name: string;
  @Output() needToUpdate = new EventEmitter
  tvtext = ""

  constructor(private router: Router) { }

  ngOnInit() {
    this.tvtext = this.name
  }
  onclick() {
    if(this.tvtext == undefined){
      alert("The input field is empty")
    }else{
      this.needToUpdate.emit(this.tvtext)
      this.tvtext = ""
      this.router.navigate(['/'])  
    }
  }
}