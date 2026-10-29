import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, throwError } from 'rxjs';

import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly apiUrl = 'http://localhost:3000/api/products';

  constructor(private readonly http: HttpClient) {}

  listar(): Observable<Produto[]> {
    // TODO: implementar GET /api/products
    //return of([]);
    return this.http.get<Produto[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erro ao buscar produtos:', error);
        return throwError(() => new error('Erro ao listar produtos')); // Retorna um array vazio em caso de erro
      }),
    );
  }

  buscarPorId(id: number): Observable<Produto> {
    // TODO: implementar GET /api/products/:id
    return this.http.get<Produto>(`${this.apiUrl}/${id}`); // Retorno vazio temporário para não quebrar a compilação
  }

  cadastrar(produto: Produto): Observable<Produto> {
    // TODO: implementar POST /api/products
    return this.http.post<Produto>(this.apiUrl, produto).pipe(
      catchError((error) => {
        console.error('Erro ao cadastrar produto:', error);
        return throwError(() => new error('Erro ao cadastrar produto')); // Retorna um array vazio em caso de erro
      }),
    );
  }

  atualizar(id: number, produto: Produto): Observable<Produto> {
    // TODO: implementar PUT /api/products/:id
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto).pipe(
      catchError((error) => {
        console.error('Erro ao atualizar produto:', error);
        return throwError(() => new error('Erro ao atualizar produto')); // Retorna um array vazio em caso de erro
      }),
    );
  }

  excluir(id: number): Observable<void> {
    // TODO: implementar DELETE /api/products/:id
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Erro ao excluir produto:', error);
        return throwError(() => new error('Erro ao excluir produto')); // Retorna um array vazio em caso de erro
      }),
    );
  }
}
