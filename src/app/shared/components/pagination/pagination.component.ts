import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  actualPage = 1;
  @Output()changePageEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(newValue: any){
    this.actualPage = newValue;
    this.changePageEmitter.emit(this.actualPage);
  }

}
