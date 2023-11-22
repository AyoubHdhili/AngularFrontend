import { Reservation } from "./reservation";

export class Etudiant {
    idEtudiant!: number;
    nomEt!: string;
    prenomEt!: string;
    birthDate!: Date;
    cin!: number;
    email!: string;
    ecole!: string;
    reservations!: Reservation[];
    schoolperformance!: number;
    interests!: string;
}
