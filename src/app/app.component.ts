import { Component } from '@angular/core';

// @Component({
//   selector: 'app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: 'app',
  template: `
  <app-yen></app-yen>
  <app-usd></app-usd>
  `,
})



export class AppComponent {
  title = 'babysteps';

  test2 = {
    'color': 'red',
    'text-align': 'center'
  }
}
