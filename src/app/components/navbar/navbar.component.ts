import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit{
  items: MenuItem[];

  constructor() {
    this.items = [];
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: "/cadastro-usuario"
          },
          {
            label: 'List',
            icon: 'pi pi-fw pi-users',
            routerLink: "/lista-usuario"
          }
        ],
      },
      {
        label: 'Carteirinha',
        icon: 'pi pi-fw pi-id-card',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-save',
            routerLink: "/cadastro-carteirinha"
          },
          {
            label: 'List',
            icon: 'pi pi-fw pi-book',
            routerLink: "/lista-carteirinha"
          }
        ]
      }
    ]
  }
}
