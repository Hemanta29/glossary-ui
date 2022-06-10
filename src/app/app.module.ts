import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlossaryComponent } from './components/glossary/glossary.component';
import { AddTermComponent } from './components/add-term/add-term.component';
import { FormsModule } from '@angular/forms';
import { RemoveTermComponent } from './components/remove-term/remove-term.component';

@NgModule({
  declarations: [
    AppComponent,
    GlossaryComponent,
    AddTermComponent,
    RemoveTermComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
