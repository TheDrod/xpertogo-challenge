export interface IOMDbApiData {
  Search: IOMDbApiDataEntry[],
  Response: string,
}

export interface IOMDbApiDataEntry {
  Title: string,
  Poster: string,
}

export interface IOMDbApiSearchObject {
  s: string;
  page: number;
}