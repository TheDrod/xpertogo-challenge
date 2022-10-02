import { Component, OnInit, ViewChild } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { IFormData } from 'src/app/interfaces/IFormData';
import { FormData } from 'src/app/classes/FormData';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
      // cell: (element: FormData) => `${element.formatedDate()}`,
      cell: ({ publicationDate }: FormData) => `${publicationDate}`,
    },
  ];
  displayedColumns = this.columns.map(({ columnDef }) => (columnDef));

  // dataSource: FormData[] = [];
  dataSource: any = [];

  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private _formService: FormService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._formService.get()
      .subscribe((response) => {
        this.dataSource = new MatTableDataSource(response.map((entry) => new FormData(entry)));
        this.dataSource.paginator = this.paginator;
      });
  }

}
