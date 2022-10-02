import { IFormData } from "src/app/interfaces/IFormData";

export class FormData implements IFormData {
  public id?: string;
  public author!: string;
  public title!: string;
  public body!: string;
  public publicationDate!: Date;

  constructor(params: IFormData) {
    Object.assign(this, params);
  }

}
