import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor(
    private navbar: NavbarService
  ) { }

  ngOnInit(): void {

  }

  definirNivelTamannio(): string {
    return `nivel-${this.navbar.obtenerNivelTamannio()}`;
  }
}
