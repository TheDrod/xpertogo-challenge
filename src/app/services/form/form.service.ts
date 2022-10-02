import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormData } from 'src/app/classes/FormData';

@Injectable({
  providedIn: 'root'
})
export class FormBackendService {

  constructor(private http: HttpClient) { }

  get(): Observable<FormData[]> {
    return this.http.get<FormData[]>("https://631b642efae3df4dcffd9e3c.mockapi.io/post");
  }

  create(value: FormData) {
    return new Promise((resolve) => {
      let fData = { ...value, publicationDate: new Date(value.publicationDate).toISOString() };
      console.log(`FormBackendService ~ create ~ fData`, fData)

      this.http.post("https://631b642efae3df4dcffd9e3c.mockapi.io/post", fData)
        .subscribe((response) => {
          resolve(response);
        });
    })
  }

}
