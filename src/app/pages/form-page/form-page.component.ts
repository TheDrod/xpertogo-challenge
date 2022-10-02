import { Component, OnInit } from '@angular/core';
import { FormBackendService } from 'src/app/services/form-backend/form-backend.service';
import { IFormData } from 'src/app/interfaces/IFormData';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: (element: IFormData) => `${element.id}`,
    },
    {
      columnDef: 'author',
      header: 'Name',
      cell: (element: IFormData) => `${element.author}`,
    },
    {
      columnDef: 'title',
      header: 'Title',
      cell: (element: IFormData) => `${element.title}`,
    },
    {
      columnDef: 'body',
      header: 'Message',
      cell: (element: IFormData) => `${element.body}`,
    },
    {
      columnDef: 'publicationDate',
      header: 'Date',
      cell: (element: IFormData) => `${element.publicationDate}`,
    },
  ];
  dataSource: IFormData[] = [];
  displayedColumns = this.columns.map(({ columnDef }) => (columnDef));

  constructor(private _formService: FormBackendService) { }

  ngOnInit(): void {
    this._formService.get()
      .subscribe((response) => {
        this.dataSource = response;
      });
  }

}
