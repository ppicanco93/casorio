import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaidentificacaoComponent } from './telaidentificacao.component';

describe('TelaidentificacaoComponent', () => {
  let component: TelaidentificacaoComponent;
  let fixture: ComponentFixture<TelaidentificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaidentificacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaidentificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
