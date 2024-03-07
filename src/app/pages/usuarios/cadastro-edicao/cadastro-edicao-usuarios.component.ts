import { Component } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../../../interfaces/usuario';
import Swal from 'sweetalert2';

// import { Component, OnInit } from '@angular/core';8
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';8
// import { ReactiveFormsModule } from '@angular/forms';8
// import { JsonPipe } from '@angular/common';
// import { PageTitleComponent } from "../../../components/page-title/page-title.component";8
// import { UsuariosService } from '../../../services/usuarios.service';8
// import { IUsuario } from '../../../interfaces/usuario';8
// import Swal from 'sweetalert2';8
// import { ActivatedRoute, Router, RouterLink } from '@angular/router';8

@Component({
  selector: 'app-cadastro-edicao',
  standalone: true,
  imports: [ReactiveFormsModule, PageTitleComponent, RouterLink],
  templateUrl: './cadastro-edicao-usuarios.component.html',
  styleUrl: './cadastro-edicao-usuarios.component.css'
})
export class CadastroEdicaoUsuariosComponent {

  id: any;
  usuarioForm: FormGroup;

  constructor(private fb:FormBuilder, 
    private usuarioService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute)
  {
      this.usuarioForm = this.fb.group({
        nome: ['', Validators.required],
        idade: []
      });
  }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    try
    {
      if (this.id)
      {
        this.usuarioService.buscarUsuarioPorId(this.id).subscribe(
          (usuario => {
            this.usuarioForm.patchValue({
              nome: usuario.nome,
              idade: usuario.idade
            })
          }));
      }
    }
    catch (error)
    {
      console.error(error);
    }

    
  }

  cadastrarUsuario() {
    
    console.log(this.usuarioForm.value);
    const usuario: IUsuario = this.usuarioForm.value;
    usuario.ativo = true;
    if (this.id)
    {
      usuario.id = this.id;
    }
    this.usuarioService.cadastrarUsuario(usuario).subscribe((result) =>
    {
      Swal.fire({
          title: "Boa!",
          text: `Usuário ${this.id ? ' editado' : 'cadastrado'}.`,
          icon:"success"
        });
      this.router.navigateByUrl('/usuarios');
    },
    (erro) => {
      console.error(erro);
    });
   
  }

}
