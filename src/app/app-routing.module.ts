import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ColorGriddingComponent } from "./color-gridding/color-gridding.component";
import { FormAddPlayerComponent } from "./form-add-player/form-add-player.component";
import { ArtistComponent } from "./artist/artist.component"
import { SoccerComponent } from "./soccer/soccer.component"

const routes: Routes = [
    { path: "soccer", component: SoccerComponent},
    { path: "artist", component: ArtistComponent},
    { path: "addplayer/:name", component: FormAddPlayerComponent},
    { path: "colorgrid", component: ColorGriddingComponent},
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
