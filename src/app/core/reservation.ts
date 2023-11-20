import { Chambre } from "./chambre";
import { Etudiant } from "./etudiant";

export class Reservation {
    idReservation!: string;
    anneeUniversitaire!: Date;
    estValide!: boolean;
    etudiants!: Etudiant[];
    chambre!: Chambre[];
}
