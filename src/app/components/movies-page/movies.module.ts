import { NgModule } from '@angular/core';


import { MoviesRoutingModule } from './movies-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MoviesPageComponent } from './movies-page.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

import { MovieService } from '../../services/movie.service';

@NgModule({
  declarations: [
    MoviesPageComponent,
    SearchInputComponent,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    MovieService,
  ],
})
export class MoviesPageModule { }
