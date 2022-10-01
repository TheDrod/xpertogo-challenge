import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OMDbApiData } from 'src/app/interfaces/OMDbApiData';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) { }

  getMovies(s: string): Observable<OMDbApiData> {
    return this.http.get<OMDbApiData>(`https://www.omdbapi.com/?s=${s}&apikey=2dba97c6`)
  }
}
