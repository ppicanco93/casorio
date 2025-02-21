import { Component, OnInit } from '@angular/core';
import { CardMensagemComponent } from "../../shared/card-mensagem/card-mensagem.component";
import { Mensagem } from '../../shared/models/mensagem';
import { ConvidadosService } from '../../convidados.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mural-de-mensagens',
  imports: [CardMensagemComponent, CommonModule],
  templateUrl: './mural-de-mensagens.component.html',
  styleUrl: './mural-de-mensagens.component.scss'
})
export class MuralDeMensagensComponent implements OnInit {
  mensagens: Mensagem[] = []

  constructor(private readonly router: Router,
    private readonly conviteService: ConvidadosService) { }

  ngOnInit(): void {
    this.conviteService.checkConvite(localStorage.getItem('numero_convite') ?? '').subscribe(
      response => {
        if (!response) {
          this.router.navigate(['/']);
        }
        else {
          this.conviteService.getMensagens().subscribe(
            response => {
              this.mensagens = response;
            }
          )
        }
      }
    )
  }

}
