import { NavbarService } from './../layout/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  constructor(private navbar: NavbarService) {}

  ngOnInit(): void {}

  obtenerNivelTamannio(): number {
    return this.navbar.obtenerNivelTamannio();
  }
}
