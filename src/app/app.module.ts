import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MovieService } from './services/movie/movie.service';

import { AppComponent } from './app.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MovieComponent } from './components/movie/movie.component';
import { FormComponent } from './components/form/form.component';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    FormPageComponent,
    HeaderComponent,
    SearchInputComponent,
    MovieComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
