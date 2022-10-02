import { IMovie } from "src/app/interfaces/IMovie";

export class Movie {
  public title!: string;
  public poster!: string;
  public genre!: string;
  public synopse!: string;
  public director!: string;
  public actors!: string;
  public rating!: string;

  constructor(params: IMovie) {
    Object.assign(this, params);
  }
}
