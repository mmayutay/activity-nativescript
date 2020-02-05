import { Injectable } from "@angular/core";
import { Item, userType } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    public index: any
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", type: userType.socceer },
        { id: 3, name: "Piqué", role: "Defender", type: userType.artist },
        { id: 4, name: "I. Rakitic", role: "Midfielder", type: userType.socceer },
        { id: 5, name: "Sergio", role: "Midfielder", type: userType.artist },
        { id: 6, name: "Denis Suárez", role: "Midfielder", type: userType.socceer },
        { id: 7, name: "Arda", role: "Midfielder", type: userType.artist },
        { id: 8, name: "A. Iniesta", role: "Midfielder", type: userType.socceer },
        { id: 9, name: "Suárez", role: "Forward", type: userType.artist },
        { id: 10, name: "Messi", role: "Forward", type: userType.socceer },
        { id: 11, name: "Neymar", role: "Forward", type: userType.artist },
        { id: 12, name: "Rafinha", role: "Midfielder", type: userType.socceer },
        { id: 13, name: "Cillessen", role: "Goalkeeper", type: userType.artist },
        { id: 14, name: "Mascherano", role: "Defender", type: userType.socceer },
        { id: 17, name: "Paco Alcácer", role: "Forward", type: userType.socceer },
        { id: 18, name: "Jordi Alba", role: "Defender", type: userType.artist },
        { id: 19, name: "Digne", role: "Defender", type: userType.socceer },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", type: userType.artist },
        { id: 21, name: "André Gomes", role: "Midfielder", type: userType.socceer },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", type: userType.artist },
        { id: 23, name: "Umtiti", role: "Defender", type: userType.socceer },
        { id: 24, name: "Mathieu", role: "Defender", type: userType.artist },
        { id: 25, name: "Masip", role: "Goalkeeper", type: userType.socceer }
    );

    getItemArtistOrSoccer(type){
        return this.items.filter((item) => item.type == type)
    }

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
    updateUser(id) {
        return this.items.filter((name) => name.id === id)[0];
    }
    updatedUser(id, array) {
        this.index = this.items.findIndex(item => (item.id === id))
        this.items[this.index].name = array;
    }
    addUserToTheList(val, role, Type) {
        this.items.push({ id: this.items[this.items.length - 1].id + 1, name: val, role: role, type: Type })
    }
}
