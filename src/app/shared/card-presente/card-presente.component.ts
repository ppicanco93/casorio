import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-presente',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './card-presente.component.html',
  styleUrl: './card-presente.component.scss'
})
export class CardPresenteComponent {

  @Input() imageUrl: string = ''; // Initialize with an empty string
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() valor: string = '';
  @Input() linkpix: string = '';
  @Input() idPresente: string = '';





  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        linkpix: this.linkpix,
        idPresente: this.idPresente,
        nomePresente: this.title
      },
      width: '400px',
    });
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ]
})
export class DialogDataExampleDialog {
  data = inject(MAT_DIALOG_DATA);
  mensagem: string = '';
  name: string = '';


  constructor(
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    private readonly router: Router) { }

  mandarMensagem() {
    location.href = this.data.linkpix;
  }
}
