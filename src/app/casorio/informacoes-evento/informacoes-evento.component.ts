import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConvidadosService } from '../../convidados.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-informacoes-evento',
  imports: [MatButtonModule],
  templateUrl: './informacoes-evento.component.html',
  styleUrl: './informacoes-evento.component.scss'
})
export class InformacoesEventoComponent implements OnInit {

    constructor(private readonly router: Router,
      private readonly conviteService: ConvidadosService
    ) {}
  
    ngOnInit(): void {
      this.conviteService.checkConvite(localStorage.getItem('numero_convite') ?? '').subscribe(
        response => {
          if (!response) {
            this.router.navigate(['/']);
          }
        }
      )
    }

}
