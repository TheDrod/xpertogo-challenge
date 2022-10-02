import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOMDbApiData, IOMDbApiSearchObject } from 'src/app/interfaces/IOMDbApi';


@Injectable()
export class MovieService {
  constructor(private http: HttpClient) { }

  getMovies({ s, page }: IOMDbApiSearchObject): Observable<IOMDbApiData> {
    return this.http.get<IOMDbApiData>(`https://www.omdbapi.com/?s=${s}&page=${page}&plot=short&apikey=2dba97c6`)
  }
}
