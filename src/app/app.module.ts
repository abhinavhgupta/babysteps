import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { ServiceService } from './service.service';
import { USDComponent } from './usd/usd.component';
import { YenComponent } from './yen/yen.component';

@NgModule({
  declarations: [
    AppComponent,
    YenComponent,
    USDComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
