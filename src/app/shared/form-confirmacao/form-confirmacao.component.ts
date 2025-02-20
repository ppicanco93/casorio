import { Component, Input } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-confirmacao',
  standalone: true,
  imports: [MatRadioModule, MatCheckboxModule, MatCardModule, CommonModule, FormsModule],
  templateUrl: './form-confirmacao.component.html',
  styleUrl: './form-confirmacao.component.scss'
})
export class FormConfirmacaoComponent{

  @Input() name!: string;
  @Input() confirmation!: string; // Initialize confirmation
  @Input() vegetariano!: boolean;
  @Input() id!: string;

  constructor() { }


}

