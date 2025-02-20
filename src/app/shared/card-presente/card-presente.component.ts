import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-card-presente',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: './card-presente.component.html',
  styleUrl: './card-presente.component.scss'
})
export class CardPresenteComponent {

  @Input() imageUrl: string = ''; // Initialize with an empty string
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() valor: string = '';
  @Input() linkpix: string = '';

}
