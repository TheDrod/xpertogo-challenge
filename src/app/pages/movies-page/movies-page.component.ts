import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
import { OMDbApiDataEntry } from 'src/app/interfaces/OMDbApiData';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies: IMovie[] = [];
  searchText: string = "lord";

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this._movieService.getMovies(this.searchText)
      .subscribe((response) => {
        this.movies = response.Search.map((entry: OMDbApiDataEntry) => {
          // ! change to class
          return {
            title: entry.Title,
            poster: entry.Poster,
          }
        });
      });
  }

  onSearchChanged(value: string) {
    this.searchText = value;
  }

  onSearch() {
    this.getMovies();
  }

}
