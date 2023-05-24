import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genero} from "../models/genero.model";

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl = 'http://localhost:3001/generos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiUrl);
  }
}
