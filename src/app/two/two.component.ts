import { NavbarService } from './../layout/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  constructor(private navbar: NavbarService) {}

  ngOnInit(): void {}

  obtenerNivelTamannio(): number {
    return this.navbar.obtenerNivelTamannio();
  }
}
