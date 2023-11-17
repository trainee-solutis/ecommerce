import { Basket } from "./basket";

export class User {
    id!: number;
    name!: string;
    email!: string;
    dateOfBirth?: Date;
    address!: string;
    Shopping!: Basket[];

    constructor(id: number, name: string, email: string, address: string, dateOfBirth?: Date, Shopping?: Basket[]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.Shopping = Shopping || [];
    }
}