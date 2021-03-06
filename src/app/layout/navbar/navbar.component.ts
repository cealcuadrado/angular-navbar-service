import { NavbarService } from './navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private navbar: NavbarService
  ) { }

  ngOnInit(): void {
  }

  obtenerNivelTamannio(): number {
    return this.navbar.obtenerNivelTamannio();
  }

  cambiarNivelTamannio(n: number): void {
    this.navbar.cambiarNivelTamannio(n);
  }
}
