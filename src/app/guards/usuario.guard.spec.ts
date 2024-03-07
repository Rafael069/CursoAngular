import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { UsuarioGuard } from './usuario.guard';

describe('usuarioGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => UsuarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
