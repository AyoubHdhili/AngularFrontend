import { Reservation } from "./reservation";

export class Etudiant {
    idEtudiant!: number;
    nomEt!: string;
    prenomEt!: string;
    birthDate!: string;
    cin!: number;
    email!: string;
    ecole!: string;
    dateNaissance!: Date;
    reservations!: Reservation[]
}
