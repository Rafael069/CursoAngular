import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const UsuarioGuard: CanActivateFn = (route, state) => {
  const perfil: string = "User";

  if (perfil != 'Admin')
  {
    Swal.fire('Permissão Negada', 'Sem permissão para acessar esta página', 'error' );
    inject(Router).navigateByUrl('/usuarios');
    return false;
  }
  return true;
};
