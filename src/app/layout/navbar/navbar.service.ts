import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  nivelTamannio = 2;

  constructor() { }

  cambiarNivelTamannio(n: number): void {
    this.nivelTamannio = n;
  }

  regresarNivelTamannio(): void {
    this.nivelTamannio = 2;
  }

  obtenerNivelTamannio(): number {
    return this.nivelTamannio;
  }
}
