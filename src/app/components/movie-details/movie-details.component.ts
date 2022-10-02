import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId!: string;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.movieId = id;
    });
  }

}
