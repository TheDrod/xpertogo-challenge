import { Component, OnInit } from '@angular/core';
import { FormData } from '../classes/FormData';
import { FormControl, Validators } from '@angular/forms';
import { FormBackendService } from 'src/app/services/form-backend/form-backend.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formData!: FormData;
  submitted = false;
  formControl = new FormControl('', [Validators.required]);

  constructor(private _formService: FormBackendService) { }

  ngOnInit(): void {
    this.onReset();
  }

  onSubmit() {
    console.log(JSON.stringify(this.formData));
    this._formService.create(this.formData)
    // this.submitted = true;
  }

  onReset() {
    this.formData = new FormData({
      // author: '',
      // title: '',
      // body: '',
      // publicationDate: new Date(),
      author: "Pedro Rodrigues",
      title: "Testing Post",
      body: "It works!",
      publicationDate: new Date(),
    });
  }

}
