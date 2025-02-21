import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardPresenteComponent } from "../../shared/card-presente/card-presente.component";
import { ConvidadosService } from '../../convidados.service';
import { CommonModule } from '@angular/common';
import { Presente } from '../../shared/models/presente';

@Component({
  selector: 'app-lista-de-presentes',
  standalone: true,
  imports: [CardPresenteComponent, CommonModule],
  templateUrl: './lista-de-presentes.component.html',
  styleUrl: './lista-de-presentes.component.scss'
})
export class ListaDePresentesComponent  implements OnInit {

  presentes: Presente[] = []


    constructor(private readonly router: Router,
      private readonly conviteService: ConvidadosService
    ) {}
  
    ngOnInit(): void {

      this.conviteService.getPresentes().subscribe(
        response => {
          this.presentes = response;
        }
      )
      // this.conviteService.checkConvite(localStorage.getItem('numero_convite') ?? '').subscribe(
      //   response => {
      //     if (!response) {
      //       this.router.navigate(['/']);
      //     }
      //     else{
      //       this.conviteService.getPresentes().subscribe(
      //         response => {
      //           this.presentes = response;
      //         }
      //       )
      //     }
      //   }
      // )
    }

}
