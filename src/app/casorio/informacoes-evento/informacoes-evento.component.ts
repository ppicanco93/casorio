import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes-evento',
  imports: [],
  templateUrl: './informacoes-evento.component.html',
  styleUrl: './informacoes-evento.component.scss'
})
export class InformacoesEventoComponent implements OnInit {


    constructor(private readonly router: Router) {}
  
    ngOnInit(): void {
      if(localStorage.getItem('numero_convite') !== '1234'){
        this.router.navigate(['']);
      }
    }

}
