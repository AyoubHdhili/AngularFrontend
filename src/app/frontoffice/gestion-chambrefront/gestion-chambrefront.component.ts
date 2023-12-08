import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  {ChambreService} from 'src/app/shared/services/chambreService/chambre.service'
import { Chambre } from 'src/app/shared/models/chambre';
import { Reservation } from 'src/app/shared/models/reservation';
import { environment } from 'src/environments/environment.development';
import { ReservationsService } from '../services/reservations.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ReservationDialogComponent } from 'src/app/pages/student/reservations/reservation-dialog/reservation-dialog.component'; 
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-gestion-chambrefront',
  templateUrl: './gestion-chambrefront.component.html',
  styleUrls: ['./gestion-chambrefront.component.scss']
})
export class GestionChambrefrontComponent implements OnInit {

  chambres:Chambre[]=[];
  idBloc!:number; 
  constructor( private route: ActivatedRoute,private _ChambreService: ChambreService,
     private reservationsService: ReservationsService, private dialog: MatDialog,   private cdRef: ChangeDetectorRef, private router : Router
    ){}

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


  id = parseInt(environment.idstudent || '-1');
  reservations!: Reservation[];
  reservation = new Reservation();
  reservationInProgress = false;

  openReservationDialog(numeroChambre: number): void {
    if (this.reservationInProgress) {
      return;
    }
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      width: '25%',
    });

    dialogRef.afterClosed().subscribe((selectedDate: Date) => {
      if (selectedDate) {
        this.reservationInProgress = true;
        this.reservation = new Reservation();
        this.reservation.anneeReservation = selectedDate;
        
        this.reservationsService.reserveachambre(this.id, numeroChambre, this.reservation).subscribe({
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
    
        console.log(`Reservation date for chambre ${numeroChambre}: ${selectedDate}`);
        this.cdRef.detectChanges(); // Trigger change detection
      }
    });
    
  }
 
}
