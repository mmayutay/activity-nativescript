import { Component, OnInit, Input } from "@angular/core";

import { Item, Type } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    @Input() artistAndSoccer: any
    @Input() updatedOne: any
    items: Array<Item>;
    boolean = true
    add = true

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        if(this.artistAndSoccer != undefined){
            this.boolean = true
            this.items = this.itemService.getItemArtistOrSoccer(this.artistAndSoccer);
        }else{
            this.boolean = false
            this.items = this.itemService.getItems()
        }
    }
    item(val){
        if(val != undefined){
            if(this.add){
                this.itemService.addUserToTheList(val, "goal keeper", Type.artist)
                this.add = false
            }else{
                this.itemService.addUserToTheList(val, "goal keeper", Type.socceer)
                this.add = true
            }
            console.log(this.add)
        }else{
            alert("Input Field is empty!")
        }        
    }
}
