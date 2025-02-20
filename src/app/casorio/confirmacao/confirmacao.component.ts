import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConvidadosService } from '../../convidados.service';

@Component({
  selector: 'app-confirmacao',
  imports: [],
  templateUrl: './confirmacao.component.html',
  styleUrl: './confirmacao.component.scss'
})
export class ConfirmacaoComponent implements OnInit{

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
