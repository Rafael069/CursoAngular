import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  api ='http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  buscarTodosProdutos()
  {
    return this.http.get<IProduto[]>(this.api);
  }

  buscarProdutoPorId(id: any)
  {
      return this.http.get<IProduto>(`${this.api}/${id}`);
  }

  cadastrarProduto(produto: IProduto)
  {
    if (produto.id)
    {
      return this.http.put(`${this.api}/${produto.id}`, produto);
    }
    else
    {
      return this.http.post(this.api, produto);
    }
  }

  removerProduto(id: number)
  {
    return this.http.delete(`${this.api}/${id}`)
  }

}