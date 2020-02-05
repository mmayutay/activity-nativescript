export interface Item {
    id: number;
    name: string;
    role: string;
    type: userType;
}
export enum userType {
    artist = "Artist",
    socceer = "Socceer"
}
