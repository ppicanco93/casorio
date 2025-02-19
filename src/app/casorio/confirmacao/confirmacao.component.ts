import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacao',
  imports: [],
  templateUrl: './confirmacao.component.html',
  styleUrl: './confirmacao.component.scss'
})
export class ConfirmacaoComponent implements OnInit{

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('numero_convite') !== '1234'){
      this.router.navigate(['']);
    }
  }

}
