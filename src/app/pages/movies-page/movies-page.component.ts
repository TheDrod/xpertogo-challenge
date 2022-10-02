import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/Movie';
import { IOMDbApiDataEntry } from 'src/app/interfaces/IOMDbApi';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
  host: {
    class: 'page-container',
  },
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[] = [];
  loading: boolean = false;
  searchText: string = "lord";
  page = 1;

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.loading = true;

    this._movieService.getMovies({
      s: this.searchText,
      page: this.page,
    })
      .subscribe((response) => {
        this.loading = false;

        if (response.Response === "False") {
          return;
        }

        this.movies = this.movies.concat(response.Search
          .map((entry: IOMDbApiDataEntry) => new Movie({
            title: entry.Title,
            poster: entry.Poster,
            genre: entry.Genre,
            synopse: entry.Plot,
            director: entry.Director,
            actors: entry.Actors,
            rating: entry.imdbRating,
          })));
      });
  }

  onSearchChanged(value: string) {
    this.searchText = value;
  }

  onLoadMore() {
    this.page++;
    this.getMovies();
  }

  onSearch() {
    this.movies = [];
    this.page = 1;
    this.getMovies();
  }

}
