import { IMovie } from "src/app/interfaces/IMovie";

export class Movie {
  public id!: string;
  public title!: string;
  public poster!: string;
  public getIndex!: number;

  constructor(params: IMovie) {
    Object.assign(this, params);
  }
}
