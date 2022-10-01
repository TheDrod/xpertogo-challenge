import { Component, OnInit } from '@angular/core';
import { FormBackendService } from 'src/app/services/form-backend/form-backend.service';
import { IFormData } from 'src/app/interfaces/IFormData';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  formDataList!: IFormData[];

  constructor(private _formService: FormBackendService) { }

  ngOnInit(): void {
    this._formService.get()
      .subscribe((response) => {
        this.formDataList = response;
      });
  }

}
