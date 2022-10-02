import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/app-header/app-header.component';
import { FallbackPageComponent } from './components/fallback-page/fallback-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FallbackPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
