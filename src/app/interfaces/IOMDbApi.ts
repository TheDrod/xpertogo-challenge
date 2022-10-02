export interface IOMDbApiData {
  Search: IOMDbApiDataEntry[],
  Response: string,
}

export interface IOMDbApiDataEntry {
  Title: string,
  Poster: string,
  Genre: string,
  Plot: string,
  Director: string,
  Actors: string,
  imdbRating: string,
}

export interface IOMDbApiSearchObject {
  s: string;
  page: number;
}