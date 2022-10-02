import { NgModule } from '@angular/core';


import { FormPageRoutingModule } from './form-page-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FormPageComponent } from './form-page.component';
import { FormComponent } from '../form/form.component';
import { FormService } from 'src/app/services/form.service';

@NgModule({
  declarations: [
    FormPageComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormPageRoutingModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  providers: [
    FormService,
  ],
})
export class FormPageModule { }
