import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormData } from '../../classes/FormData';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formData!: FormData;
  formControl = new FormControl('', [Validators.required]);

  @ViewChild(NgForm) myForm!: NgForm;

  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _formService: FormService) { }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.formData = new FormData({
      author: '',
      title: '',
      body: '',
      publicationDate: new Date(),
      // author: 'name',
      // title: 'Title',
      // body: 'Message',
      // publicationDate: new Date(),
    });
  }

  onSubmit() {
    // if (!this.myForm.valid) {
    if (this.formControl.status === 'INVALID') {
      return;
    }

    this._formService.create(this.formData).then(() => {
      this.submit.emit();
      this.onReset();
    });
  }

  onReset() {
    this.reset();
    Object.keys(this.myForm.controls).forEach((key) => {
      const control = this.myForm.controls[key];
      control.markAsPristine();
      control.markAsUntouched();
    });
    setTimeout(() => {
      Object.keys(this.myForm.controls).forEach((key) => {
        const control = this.myForm.controls[key];
        control.setErrors(null);
      });
    })
  }

}
