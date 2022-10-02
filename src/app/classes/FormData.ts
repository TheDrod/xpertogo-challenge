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

  formatedDate() {
    let pDate = new Date(this.publicationDate);

    let day = pDate.getDate();
    let month = pDate.getMonth();
    let year = pDate.getFullYear();

    let fDay = (day < 10) ? '0' + day : day.toString();
    let fMonth = (month < 10) ? '0' + month : month.toString();

    return `${fDay}/${fMonth}/${year}`;
  }

}
