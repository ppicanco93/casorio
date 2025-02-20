import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ConvidadosService } from '../../convidados.service';
import { FormConfirmacaoComponent } from "../../shared/form-confirmacao/form-confirmacao.component";
import { MatButtonModule } from '@angular/material/button';
import { Convidados } from '../../shared/models/convidados';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacao',
  imports: [FormConfirmacaoComponent, MatButtonModule, CommonModule],
  templateUrl: './confirmacao.component.html',
  styleUrl: './confirmacao.component.scss'
})
export class ConfirmacaoComponent implements OnInit{
  
  convidados!: Convidados[]

  @ViewChildren(FormConfirmacaoComponent)
  formConfirmacaoComponents!: QueryList<FormConfirmacaoComponent>;
  
  constructor(private readonly router: Router,
    private readonly conviteService: ConvidadosService
  ) {}
  
  ngOnInit(): void {
    this.conviteService.checkConvite(localStorage.getItem('numero_convite') ?? '').subscribe(
      response => {
        if (!response) {
          this.router.navigate(['/']);
        } else{
          this.conviteService.getConvidadosPorConvite(response).subscribe(
            response => {
              this.convidados = response;
            })
            
          }
        }
      )
    }
    
    logConfirmationData() {
      this.formConfirmacaoComponents.forEach(formComponent => {

        console.log({
          confirmacao: formComponent.confirmation,
          vegetariano: formComponent.vegetariano,
          id: formComponent.id
        });
        this.conviteService.updateConvidado({
          id: formComponent.id,
          status: formComponent.confirmation,
          vegano: formComponent.vegetariano ? "true" : "false"
        
      }).subscribe(
        response => {
          this.router.navigate(['/']);
        }
      );
    })
  }

}
