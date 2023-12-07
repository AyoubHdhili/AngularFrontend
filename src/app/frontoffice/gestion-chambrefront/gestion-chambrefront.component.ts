import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {ChambreService} from 'src/app/shared/services/chambreService/chambre.service'
import { Chambre } from 'src/app/shared/models/chambre';
import { Reservation } from 'src/app/shared/models/reservation';
import { environment } from 'src/environments/environment.development';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-gestion-chambrefront',
  templateUrl: './gestion-chambrefront.component.html',
  styleUrls: ['./gestion-chambrefront.component.scss']
})
export class GestionChambrefrontComponent implements OnInit {

  chambres:Chambre[]=[];
  idBloc!:number; 
  constructor( private route: ActivatedRoute,private _ChambreService: ChambreService, private reservationsService: ReservationsService){}

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
  reservation!: Reservation;

  makereservation(idchambre: number) {
    this.reservationsService.reserveachambre(this.id, idchambre,this.reservation);
  }

 
}
