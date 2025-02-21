import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card-mensagem',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-mensagem.component.html',
  styleUrl: './card-mensagem.component.scss'
})
export class CardMensagemComponent {

  @Input() nome: string = '';
  @Input() mensagem: string = '';

}
