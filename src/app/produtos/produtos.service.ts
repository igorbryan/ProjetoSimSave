import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';


@Injectable()
export class ProdutoService {


  constructor(private http: HttpClient){}

    protected UrlServiceV1: string = "http://localhost:3000/";

    obterProduto() : Observable<Produto[]> {
      return this.http.get<Produto[]>(this.UrlServiceV1 + "products")
    }
}