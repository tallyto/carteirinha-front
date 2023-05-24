import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Escolaridade} from "../models/escolaridade.model";

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeService {

  private apiUrl = 'http://localhost:3001/escolaridades';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Escolaridade[]> {
    return this.http.get<Escolaridade[]>(this.apiUrl);
  }
}
