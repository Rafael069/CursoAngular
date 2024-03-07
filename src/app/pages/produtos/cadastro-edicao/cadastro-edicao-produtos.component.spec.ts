import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEdicaoProdutosComponent } from './cadastro-edicao-produtos.component';

describe('CadastroEdicaoComponent', () => {
  let component: CadastroEdicaoProdutosComponent;
  let fixture: ComponentFixture<CadastroEdicaoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEdicaoProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroEdicaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
