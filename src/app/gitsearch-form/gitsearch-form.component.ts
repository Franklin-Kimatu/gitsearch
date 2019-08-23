import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>()
  
  searchTerm:string;
  search(){
    this.emitSearch.emit(this.searchTerm);
  }
  constructor() { }

  ngOnInit() {
  }

}
