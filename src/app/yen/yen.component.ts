import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html'
})
export class YenComponent {

  usdDisplayText: number = 0;
  subscription: Subscription;

  constructor(private serviceService: ServiceService) {
    this.subscription = serviceService.yen.subscribe(
      yen => {
        this.usdDisplayText = yen * 113;
      });
  }

  convertToUsd(newYen) {
    this.serviceService.setUSD(newYen.target.value);
  }

  getUsdDisplayText() {
    return this.usdDisplayText;

  }
}
