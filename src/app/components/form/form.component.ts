import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormData } from '../../classes/FormData';
import { FormControl, Validators } from '@angular/forms';
import { FormBackendService } from 'src/app/services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formData!: FormData;
  submitted = false;
  formControl = new FormControl('', [Validators.required]);

  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _formService: FormBackendService) { }

  ngOnInit(): void {
    this.reset();
  }

  onSubmit() {
    this._formService.create(this.formData).then(() => {
      this.submit.emit();
      this.reset();
    });
  }

  reset() {
    this.formData = new FormData({
      author: '',
      title: '',
      body: '',
      publicationDate: new Date(),
    });
  }

}
