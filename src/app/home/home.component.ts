import { NavbarService } from './../layout/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private navbar: NavbarService
  ) { }

  ngOnInit(): void {
  }

  obtenerNivelTamannio(): number {
    return this.navbar.obtenerNivelTamannio();
  }
}
