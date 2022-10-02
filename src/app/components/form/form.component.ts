import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormData } from '../../classes/FormData';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formData!: FormData;
  myForm!: FormGroup;

  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private _formService: FormService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      author: ['', [Validators.required]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      publicationDate: [new Date(), [Validators.required]],
    });
  }

  get author(): any {
    return this.myForm.get('author');
  }
  get title(): any {
    return this.myForm.get('title');
  }
  get body(): any {
    return this.myForm.get('body');
  }

  async onSubmit() {
    if (!this.myForm.valid) {
      return;
    }

    const formValue = this.myForm.value;

    try {
      await this._formService.create(formValue);
      this.submit.emit();
      this.onReset();
    } catch (error) {
      console.error(error);
    }
  }

  onReset() {
    this.myForm.setValue({ author: '', title: '', body: '', publicationDate: new Date() });
    this.myForm.markAsPristine();
    this.myForm.markAsUntouched();
  }

}
