import { NavbarService } from './../layout/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  constructor(private navbar: NavbarService) {}

  ngOnInit(): void {}

  obtenerNivelTamannio(): number {
    return this.navbar.obtenerNivelTamannio();
  }
}
