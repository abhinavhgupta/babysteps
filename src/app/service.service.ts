import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class ServiceService {


  // constructor() { }


  getName() {
    return "rahul";
  }





  public yen = new Subject<number>();
  public usd = new Subject<number>();
  // Service message commands

  setYEN(yen: number) {
    this.yen.next(yen);
  }
  setUSD(usd: number) {
    this.usd.next(usd);
  }
}
