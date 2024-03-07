import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";
import Swal from 'sweetalert2';
import { IProduto } from '../../../interfaces/produto';
import { ProdutosService } from '../../../services/produtos.service';
import { CurrencyPipe, DecimalPipe, registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [PageTitleComponent, RouterLink,CurrencyPipe, DecimalPipe],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemProdutosComponent {
  titulo:string = 'Usuários';
  produtos: IProduto[] = [];

  constructor(private produtosService: ProdutosService,
              private router: Router) {}

  ngOnInit()
  {
    this.produtosService.buscarTodosProdutos().subscribe(produtos => {
      this.produtos = produtos;
    }, error => { console.error(error); })
  }

  removerProduto(id:number){
    Swal.fire({
                title:"Exclusão de Produto",
                text: "Exclui mesmo",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim"
    }).then((result: { isConfirmed: any; }) => {
                if (result.isConfirmed)
                {     this.produtos = this.produtos.filter(produtosLista =>
                            produtosLista.id != id);
                      this.produtosService.removerProduto(id).subscribe(result => {
                      Swal.fire({
                        title: "Boa!",
                        text: "Excluiu mais um.",
                        icon:"success"
                      });
                      this.router.navigateByUrl('/produtos');
                    }), (erro: any) =>{
                      console.error(erro);
                    }
                }
              })
      }
}
