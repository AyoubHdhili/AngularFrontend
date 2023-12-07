import { Component } from '@angular/core';
import { ReservationsService } from 'src/app/frontoffice/services/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

  id = parseInt(environment.idstudent || '-1');
  reservations!: Reservation[];
  reservation!: Reservation;
  constructor(private reservationsService: ReservationsService) { }

  ngOnInit(): void {
    this.fetchstudentreservations();
  };

  //// fetch data and patch
  fetchstudentreservations() {
    this.reservationsService.getReservationbyStudent(this.id).subscribe(
      (reservations) => {
        this.reservations = reservations;
      }
    );
  }

  makereservation(idstudent: number, idchambre: number, reservation: Reservation) {
    this.reservationsService.reserveachambre(idstudent, idchambre, reservation);
  }

}
