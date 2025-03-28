import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-linklogin',
  imports: [],
  templateUrl: './linklogin.component.html',
})
export class LinkloginComponent implements OnInit {

  idConvite! : string;


  constructor(private readonly route: ActivatedRoute, 
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idConvite = params.get('idConvite') ?? '';
      if (this.idConvite.length == 4 && /^\d+$/.test(this.idConvite)){
        localStorage.setItem('numero_convite', this.idConvite);
        this.router.navigate(['/confirmacao']);
      } else {
        this.router.navigate(['/lista-de-presentes']);
      }
    });
  }
}
