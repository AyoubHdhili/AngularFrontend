import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-dialog',
  template: `
    <h2 mat-dialog-title>Select Reservation Date</h2>
    <mat-dialog-content>
      <mat-form-field>
        <input matInput [matDatepicker]="picker" placeholder="Choose a date" [(ngModel)]="selectedDate">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancelClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="selectedDate" cdkFocusInitial >Reserve</button>
    </mat-dialog-actions>
  `,
})
export class ReservationDialogComponent {
  selectedDate!: Date;

  constructor(public dialogRef: MatDialogRef<ReservationDialogComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
