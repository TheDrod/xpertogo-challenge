export interface OMDbApiData {
  Search: OMDbApiDataEntry[],
}
export interface OMDbApiDataEntry {
  Title: string,
  Poster: string,
}