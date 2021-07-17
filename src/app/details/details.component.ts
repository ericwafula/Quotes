import { Quotes } from './../quotes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() author: Quotes;
  @Output() isToDelete = new EventEmitter<boolean>();

  deleteCard(deleteNow: boolean){
    this.isToDelete.emit(deleteNow);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
