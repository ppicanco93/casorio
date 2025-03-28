import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-informacoes-evento',
  imports: [MatButtonModule],
  templateUrl: './informacoes-evento.component.html',
  styleUrl: './informacoes-evento.component.scss'
})
export class InformacoesEventoComponent implements OnInit {

    constructor() {}
  
    ngOnInit(): void {
    }

}
