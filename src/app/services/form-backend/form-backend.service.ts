import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormData } from 'src/app/interfaces/IFormData';

@Injectable({
  providedIn: 'root'
})
export class FormBackendService {

  constructor(private http: HttpClient) { }

  get(): Observable<IFormData[]> {
    return this.http.get<IFormData[]>("https://631b642efae3df4dcffd9e3c.mockapi.io/post");
  }

  create(value: IFormData) {
    let fData = { ...value, publicationDate: new Date(value.publicationDate).toISOString() };
    console.log(`FormBackendService ~ create ~ fData`, fData)

    this.http.post("https://631b642efae3df4dcffd9e3c.mockapi.io/post", fData)
      .subscribe((response) => {
        console.log(response);
      });
  }

}
