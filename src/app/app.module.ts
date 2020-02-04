import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ColorGriddingComponent } from './color-gridding/color-gridding.component';
import { FormAddPlayerComponent } from './form-add-player/form-add-player.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
 import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ArtistComponent } from './artist/artist.component';
import { SoccerComponent } from './soccer/soccer.component';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        ColorGriddingComponent,
        FormAddPlayerComponent,
        ArtistComponent,
        SoccerComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
