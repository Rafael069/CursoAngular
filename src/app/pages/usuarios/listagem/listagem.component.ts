import { Component } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";

import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../../../interfaces/usuario';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [PageTitleComponent,RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})

export class ListagemUsuariosComponent {
  titulodaPagina: string = 'Usuários';
  usuarios: IUsuario[] = [];

  constructor(private usuariosService: UsuariosService,
              private router: Router) {}




    ngOnInit()
              {
                this.usuariosService.buscarTodosUsuarios().subscribe(usuarios => {
                  this.usuarios = usuarios;
                }, error => { console.error(error); })
              }


              removerUsuario(id:number){
                Swal.fire({
                            title:"Exclusão de Usuário",
                            text: "Exclui mesmo",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Sim"
                }).then((result: { isConfirmed: any; }) => {
                            if (result.isConfirmed)
                            {     this.usuarios = this.usuarios.filter(usuarioLista =>
                                              usuarioLista.id != id);
                                  this.usuariosService.removerUsuario(id).subscribe(result => {
                                  Swal.fire({
                                    title: "Boa!",
                                    text: "Excluiu mais um.",
                                    icon:"success"
                                  });
                                  this.router.navigateByUrl('/usuarios');
                                }), (erro: any) =>{
                                  console.error(erro);
                                }
                            }
                          })
                  }



}


