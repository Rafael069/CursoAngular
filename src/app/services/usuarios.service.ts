import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  api ='http://localhost:3000/usuarios';
  
  constructor(private http: HttpClient) { }

  buscarTodosUsuarios()
  {
    return this.http.get<IUsuario[]>(this.api);
  }

  buscarUsuarioPorId(id: any)
  {
      return this.http.get<IUsuario>(`${this.api}/${id}`);
  }

  cadastrarUsuario(usuario: IUsuario)
  {
    if (usuario.id)
    {
      return this.http.put(`${this.api}/${usuario.id}`, usuario);
    }
    else
    {
      return this.http.post(this.api, usuario);
    }
  }

  removerUsuario(id: number)
  {
    return this.http.delete(`${this.api}/${id}`)
  }
  
}
