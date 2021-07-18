import { Quotes } from './../quotes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  newQuote = new Quotes("", "", "", new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes("", "", "", new Date());
  }

  ngOnInit(): void {
  }

}
