import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEdicaoUsuariosComponent } from './cadastro-edicao-usuarios.component';

describe('CadastroEdicaoComponent', () => {
  let component: CadastroEdicaoUsuariosComponent;
  let fixture: ComponentFixture<CadastroEdicaoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEdicaoUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroEdicaoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
