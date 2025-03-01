import { Component, OnInit } from '@angular/core';
import { Convidados } from '../../shared/models/convidados';
import {MatTableModule} from '@angular/material/table';
import { ConvidadosService } from '../../convidados.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-convidados',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './tabela-convidados.component.html',
  styleUrl: './tabela-convidados.component.scss'
})
export class TabelaConvidadosComponent implements OnInit{
  displayedColumns: string[] = ['nome_convidado', 'id_convite','status', 'vegano','visitas_site'];
  
  convidados!: Convidados[]
  convidadosConfirmados = 0;
  convidadosRecusados = 0;
  convidadosSemResposta = 0;
  veganosConfirmados = 0;
  visitasSite = 0;
  
  constructor(
    private readonly conviteService: ConvidadosService
  ) {}
  
  ngOnInit(): void {
    this.conviteService.getConvidados().subscribe(
      response => {
        this.convidados = response;
        this.convidadosConfirmados = this.convidados.filter(convidado => {return convidado.status === 'yes'}).length;
        this.convidadosRecusados = this.convidados.filter(convidado => {return convidado.status === 'no'}).length;
        this.convidadosSemResposta = this.convidados.filter(convidado => {return convidado.status === ''}).length;
        this.veganosConfirmados = this.convidados.filter(convidado => {return convidado.status === 'yes' && convidado.vegano === 'true'}).length;
        this.visitasSite = 0;
        let convites = new Set(this.convidados.map(convidado => convidado.id_convite))
        convites.forEach(convite => {this.visitasSite += this.convidados.filter(convidado => convidado.id_convite === convite)[0].visitas_site})

      })
  }
}
