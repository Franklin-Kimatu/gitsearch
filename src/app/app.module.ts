import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GitsearchFormComponent,
    GitsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
