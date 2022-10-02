import { Component, OnInit } from '@angular/core';
import { FormBackendService } from 'src/app/services/form/form.service';
import { IFormData } from 'src/app/interfaces/IFormData';
import { FormData } from 'src/app/classes/FormData';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  host: {
    class: 'page-container',
  },
})
export class FormPageComponent implements OnInit {
  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: ({ id }: IFormData) => `${id}`,
    },
    {
      columnDef: 'author',
      header: 'Name',
      cell: ({ author }: IFormData) => `${author}`,
    },
    {
      columnDef: 'title',
      header: 'Title',
      cell: ({ title }: IFormData) => `${title}`,
    },
    {
      columnDef: 'body',
      header: 'Message',
      cell: ({ body }: IFormData) => `${body}`,
    },
    {
      columnDef: 'publicationDate',
      header: 'Date',
      cell: (element: FormData) => `${element.formatedDate()}`,
    },
  ];
  dataSource: FormData[] = [];
  displayedColumns = this.columns.map(({ columnDef }) => (columnDef));

  constructor(private _formService: FormBackendService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._formService.get()
      .subscribe((response) => {
        this.dataSource = response.map((entry) => new FormData(entry));
      });
  }

}
