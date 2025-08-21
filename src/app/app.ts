import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <!-- <h1>bonjour</h1> -->
  <router-outlet />`,
  styles: ``,
})
export class App {
  protected title = 'gestion_des_produits';
}
