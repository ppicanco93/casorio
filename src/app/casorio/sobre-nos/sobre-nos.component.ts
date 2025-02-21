import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConvidadosService } from '../../convidados.service';

@Component({
  selector: 'app-sobre-nos',
  imports: [],
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.scss'
})
export class SobreNosComponent {

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
