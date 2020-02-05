import { Component, OnInit, Input } from "@angular/core";
import { Item , userType} from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    @Input() artistAndSoccer: userType
    items: Array<Item>;
    boolean = true

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        if(this.artistAndSoccer != undefined){
            this.boolean = false
            this.items = this.itemService.getItemArtistOrSoccer(this.artistAndSoccer);
        }else{
            this.boolean = true
            this.items = this.itemService.getItems()
        }
    }
    item(val){
        this.itemService.addUserToTheList(val, "goal keeper", this.artistAndSoccer);
    }
}
