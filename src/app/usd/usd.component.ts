import { Component, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html'
})
export class USDComponent {

  yenDisplayText: number = 0;
  subscription: Subscription;

  constructor(private serviceService: ServiceService) {
    this.subscription = serviceService.usd.subscribe(
      usd => {
        this.yenDisplayText = usd * .0088
      });
  }

  convertToYen(newUsd): void {
    this.serviceService.setYEN(newUsd.target.value);
  }

  getYenDisplayText() {
    return this.yenDisplayText;
  }
}
