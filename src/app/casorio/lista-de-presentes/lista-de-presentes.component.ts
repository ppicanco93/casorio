import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-presentes',
  imports: [],
  templateUrl: './lista-de-presentes.component.html',
  styleUrl: './lista-de-presentes.component.scss'
})
export class ListaDePresentesComponent  implements OnInit {


    constructor(private readonly router: Router) {}
  
    ngOnInit(): void {
      if(localStorage.getItem('numero_convite') !== '1234'){
        this.router.navigate(['']);
      }
    }

}
