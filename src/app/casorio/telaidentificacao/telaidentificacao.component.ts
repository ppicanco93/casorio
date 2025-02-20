import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { ConvidadosService } from '../../convidados.service';

@Component({
  selector: 'app-telaidentificacao',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './telaidentificacao.component.html',
  styleUrl: './telaidentificacao.component.scss'
})
export class TelaidentificacaoComponent implements OnInit{

  constructor(private readonly router: Router,
    private readonly conviteService: ConvidadosService
  ) {} // Inject Router

  ngOnInit(): void {
    this.conviteService.checkConvite(localStorage.getItem('numero_convite') ?? '').subscribe(
      response => {
        if (response) {
          this.router.navigate(['/lista-de-presentes']);
        }
      }
    )
  }

  logMessage(messageInput: HTMLInputElement) {
    this.conviteService.checkConvite(messageInput.value).subscribe(
      response => {
        if (response !== "0") {
          localStorage.setItem('numero_convite', response ?? '');
          this.router.navigate(['/lista-de-presentes']);
        } else {
          alert("Convite não encontrado. Por favor, verifique o nome ou número do convite.")
        }
      }
    )
  }

}
