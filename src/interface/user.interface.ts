import { Coordinates } from "./coordinates.interface";

export interface User{
    uuid: string;
    firstName:string;
    lastName:string;
    gender:string;
    address: string;
    email: string;
    phone: string;
    imageUrl: string;
    coordinate: Coordinates;
}