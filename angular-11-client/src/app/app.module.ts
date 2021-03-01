import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMilkBoxComponent } from './components/add-milkbox/add-milkbox.component';
import { MilkboxDetailsComponent } from './components/milkbox-details/milkbox-details.component';
import { MilkboxesListComponent } from './components/milkbox-list/milkboxes-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMilkBoxComponent,
    MilkboxDetailsComponent,
    MilkboxesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
