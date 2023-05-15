import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carteirinha } from '../models/carteirinha.model';

@Injectable({
  providedIn: 'root'
})
export class CarteirinhaService {

  private apiUrl = 'http://localhost:3001/carteirinhas';

  constructor(private http: HttpClient) { }

  getCarteirinhas(): Observable<Carteirinha[]> {
    return this.http.get<Carteirinha[]>(this.apiUrl);
  }

  cadastrar(carteirinha: Carteirinha): Observable<Carteirinha> {
    return this.http.post<Carteirinha>(this.apiUrl, carteirinha);
  }

}
