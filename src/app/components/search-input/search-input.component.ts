import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() value: string = '';
  @Input() placeholder: string = 'Search...';

  @Output() update: EventEmitter<string> = new EventEmitter<string>();
  @Output() search: EventEmitter<void> = new EventEmitter<void>();

  onChange() {
    this.update.emit(this.value);
  }

  onSearch() {
    this.search.emit();
  }

}
