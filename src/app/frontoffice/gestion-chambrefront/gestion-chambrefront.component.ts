import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from 'src/app/shared/services/chambreService/chambre.service'
import { Chambre } from 'src/app/shared/models/chambre';
import { Reservation } from 'src/app/shared/models/reservation';
import { environment } from 'src/environments/environment.development';
import { ReservationsService } from '../services/reservations.service';
import { MatDialog } from '@angular/material/dialog';
import { ReservationDialogComponent } from 'src/app/pages/student/reservations/reservation-dialog/reservation-dialog.component';
import { ChangeDetectorRef } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-gestion-chambrefront',
  templateUrl: './gestion-chambrefront.component.html',
  styleUrls: ['./gestion-chambrefront.component.scss']
})
export class GestionChambrefrontComponent implements OnInit {

  chambres: Chambre[] = [];
  idBloc!: number;
  constructor(private route: ActivatedRoute, private _ChambreService: ChambreService,
    private reservationsService: ReservationsService, private dialog: MatDialog, private cdRef: ChangeDetectorRef, private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idBloc = params['idBloc']; // Retrieve idBloc from route params
      if (this.idBloc) {
        this._ChambreService.getChambres2(this.idBloc).subscribe({
          next: (data) => {
            this.chambres = data;
          },
          error: (error: any) => {
            console.log('Error retrieving chambres:', error);
          },
          complete: () => console.log('Complete'),
        });
      }
    });
  }



  onButtonClickedInChild(idreser:number) {
    console.log('Button clicked in child component with ID:', idreser);
    this.deletereservation(idreser);
  }
  id = parseInt(environment.idstudent || '-1');
  reservations!: Reservation[];
  reservation = new Reservation();
  reservationInProgress = false;

  openReservationDialog(numeroChambre: number): void {
    /*if (this.reservationInProgress) {
      return;
    }*/
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      //width: '30%',
      minWidth: 'fit-content'
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response.selectedDate) {
        this.reservationInProgress = true;
        this.reservation = new Reservation();
        this.reservation.anneeReservation = response.selectedDate;


        let requestObject: ReservationRequest = ( this.reservation, response.matchingScores );

        console.log(response.matchingScores)
        this.reservationsService.reserveachambre(this.id, numeroChambre, {
          "reservation": this.reservation,
          "matchingScores": response.matchingScores
        }, response.checked, response.idmatched).subscribe({
          next: () => {
            console.log("success")
          },
          error: (err) => {
            console.error('Error reserving chambre:', err);
          },
          complete: () => {
            this.reservationInProgress = false;
            //this.router.navigate(['/user/student/reservations']);
          },
        });

        console.log(`Reservation date for chambre ${numeroChambre}: ${response.selectedDate}`);
        this.cdRef.detectChanges(); // Trigger change detection
      }
    });

  }

  deletereservation(idreser: number){
    this.reservationsService.DeleteReservation(idreser).subscribe({
      next: () => {
        console.log("sent")
      },
      error: (err) => {
        console.error('Error ', err);
      },
    });
  }

}
export interface ReservationRequest {
  reservation: Reservation;
  matchingScores: number[];
}

