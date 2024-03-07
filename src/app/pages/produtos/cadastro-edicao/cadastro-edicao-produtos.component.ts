import { Component, OnInit} from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";
import { ReactiveFormsModule } from '@angular/forms';
import { IUsuario } from '../../../interfaces/usuario';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduto } from '../../../interfaces/produto';
import { ProdutosService } from '../../../services/produtos.service';
import Swal from 'sweetalert2';



@Component({
    selector: 'app-cadastro-edicao',
    standalone: true,
    templateUrl: './cadastro-edicao-produtos.component.html',
    styleUrl: './cadastro-edicao-produtos.component.css',
    imports: [ReactiveFormsModule, PageTitleComponent, RouterLink]
})

export class CadastroEdicaoProdutosComponent {

  id: any;
  produtoForm: FormGroup;

  constructor(private fb:FormBuilder, 
    private produtosService: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute)
  {
      this.produtoForm = this.fb.group({
        nomeProduto: ['', Validators.required],
        codigoBarras: ['', [ Validators.required
                         , Validators.minLength(13)
                         , Validators.maxLength(13) ]],
        quantidade:  ['', [Validators.required, Validators.min(0)]],
        preco: ['', [Validators.required, Validators.min(0)]]
      });
  }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    try
    {
      if (this.id)
      {
        this.produtosService.buscarProdutoPorId(this.id).subscribe(
          (produto => {
            this.produtoForm.patchValue({
              nomeProduto: produto.nomeProduto,
              codigoBarras: produto.codigoBarras,
              quantidade: produto.quantidade,
              preco: produto.preco
            })
          }));
      }
    }
    catch (error)
    {
      console.error(error);
    }

    
  }

  cadastrarProduto() {
    
    console.log(this.produtoForm.value);
    const produto: IProduto = this.produtoForm.value;
    produto.ativo = true;
    if (this.id)
    {
      produto.id = this.id;
    }
    this.produtosService.cadastrarProduto(produto).subscribe((result) =>
    {
      Swal.fire({
          title: "Boa!",
          text: `Produto ${this.id ? ' editado' : 'cadastrado'}.`,
          icon:"success"
        });
      this.router.navigateByUrl('/produtos');
    },
    (erro) => {
      console.error(erro);
    });
   
  }

onKeyDownCodigoBarras(event: KeyboardEvent) {
  console.log(event);
  let cod = this.produtoForm?.value?.codigoBarras;
  console.log(cod);
  if (event.key == "Backspace" || event.key == "Delete")
  {
    return true;
  }
  if (event.key < "0" || event.key > "9")
  {
    event.preventDefault();
    return(false);
  }
  return(true);
}
  
}
