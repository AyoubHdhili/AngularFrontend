import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReservationsService } from 'src/app/frontoffice/services/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation';
import { environment } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {
  @Input() reload!: boolean;

  @Output() buttonClicked = new EventEmitter<number>();

  onButtonClicked(idreser:number) {
    this.buttonClicked.emit(idreser);
  }

  id = parseInt(environment.idstudent || '-1');
  reservations!: Reservation[];
  reservation!: Reservation;
  idstud!: number;
  idreserv!: number;
  code!: string;
  send!:boolean;
  idmatch!:number;
  constructor(private route: ActivatedRoute, private reservationsService: ReservationsService) { }

  ngOnInit(): void {
    this.fetchstudentreservations();
    this.route.params.subscribe(params => {
      this.idstud = params['idstud'];
      this.idreserv = params['idreserv'];
      this.code = params['code'];
    });
    console.log(this.idstud)
    if (this.code == null) this.reservationsService.validate(this.idstud, this.idreserv, this.code);
    else this.getassignedtoreservation();
  };

  ngOnChanges() {
    console.log(this.reload);
    this.fetchstudentreservations();
  }

  //// fetch data and patch
  fetchstudentreservations() {
    this.reservationsService.getReservationbyStudent(this.id).subscribe(
      (reservations) => {
        this.reservations = reservations;
      }
    );
  }
  validate() {
    this.reservationsService.validate(this.idstud, this.idreserv, this.code).subscribe(
      (data) => {
        console.log(data)
      }
    );
  }
  makereservation(idstudent: number, idchambre: number, reservation: Reservation) {
    //this.reservationsService.reserveachambre(idstudent, idchambre, reservation,this.send,this.idmatch);
  }
  getassignedtoreservation(){
    //this.reservationsService.
  }

}
