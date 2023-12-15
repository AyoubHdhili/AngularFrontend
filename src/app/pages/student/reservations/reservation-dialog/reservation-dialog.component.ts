import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/frontoffice/services/student.service';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { environment } from 'src/environments/environment.development';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
})
export class ReservationDialogComponent {
  selectedDate!: Date;
  checked: boolean=false;
  id = parseInt(environment.idstudent || '-1');
  idmatched!:number;
  roommateMatchResult!: RoommateMatchResponse;
  matchingScores!:number[];

  constructor(public dialogRef: MatDialogRef<ReservationDialogComponent>, private studentService: StudentService) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  GetMatch() {
    this.studentService.MatchStudent(this.id).subscribe({
      next: (response) => {
        console.log("match success");
        this.roommateMatchResult = response;
        this.idmatched=this.roommateMatchResult.etudiant.idEtudiant;
        this.matchingScores=this.roommateMatchResult.matchingScores;
      },
      error: (err) => {
        console.error('Error matching:', err);
      },
      complete: () => {
      },
    });
  }

}
export interface RoommateMatchResponse {
  etudiant: Etudiant;
  matchingScores: number[];
  similarinterests: string[];
}
