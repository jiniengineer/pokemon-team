import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: 'pokemon-dialog.component.html',
})
export class PokemonDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PokemonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
