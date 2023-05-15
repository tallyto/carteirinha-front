import { Component, OnInit } from '@angular/core';
import {CarteirinhaService} from "../../services/carteirinha.service";
import {Carteirinha} from "../../models/carteirinha.model";

@Component({
  selector: 'app-carteirinha-lista',
  templateUrl: './carteirinha-lista.component.html',
  styleUrls: ['./carteirinha-lista.component.css']
})
export class CarteirinhaListaComponent implements OnInit {

  carteirinhas: Carteirinha[];

  constructor(private carteirinhaService: CarteirinhaService) {
    this.carteirinhas = [];
  }

  ngOnInit(): void {
    this.carteirinhaService.getCarteirinhas().subscribe(
      carteirinhas => this.carteirinhas = carteirinhas
    );
  }

}
