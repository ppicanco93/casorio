import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telaidentificacao',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './telaidentificacao.component.html',
  styleUrl: './telaidentificacao.component.scss'
})
export class TelaidentificacaoComponent implements OnInit{

  constructor(private readonly router: Router) {} // Inject Router

  ngOnInit(): void {
    const storedConvite = localStorage.getItem('numero_convite');
    console.log(storedConvite);
    if (storedConvite === '1234') {
      this.router.navigate(['/lista-de-presentes']);
    }
  }

  logMessage(messageInput: HTMLInputElement) {
    localStorage.setItem('numero_convite', messageInput.value);
    messageInput.value = ''; // Clear the input value
  }

}
