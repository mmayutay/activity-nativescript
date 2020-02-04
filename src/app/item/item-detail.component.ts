import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute} from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    boolean = false
    dec = true
    count = 0
    item: Item;
    value: any

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }
    increment() {
        this.dec = true
        this.count += 1
    }
    decrement() {
        if (this.count == 0) {
            this.dec = false
        } else {
            this.count -= 1
        }
    }
    update(id){
        this.value = this.itemService.updateUser(id)
        this.boolean = true
    }
    valueFromForm(val){
        this.itemService.updatedUser(this.item.id, val)
    }
}
