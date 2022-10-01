import { IMovie } from "src/app/interfaces/IMovie";

export class Movie {
  public title!: string;
  public poster!: string;

  constructor(params: IMovie) {
    Object.assign(this, params);
  }
}
