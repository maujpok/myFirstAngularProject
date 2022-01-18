import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {firstComponentComponent} from './components/firstComponent/firstComponent.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { DashboardCopyComponent } from './components/dashboard-copy/dashboard-copy.component';
import { CardCopyComponent } from './components/dashboard-copy/card-copy/card-copy.component';


@NgModule({
  declarations: [
    AppComponent,
    firstComponentComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent,
    DashboardCopyComponent,
    CardCopyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
