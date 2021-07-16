import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  quotes:Quotes[] = [
    new Quotes("When something is important enough, you do it even if the odds are not in your favor.", "Elon Musk", "Eric Wathome"),
    new Quotes("When something is important enough, you do it even if the odds are not in your favor.", "Elon Musk", "Eric Wathome"),
    new Quotes("When something is important enough, you do it even if the odds are not in your favor.", "Elon Musk", "Eric Wathome"),
    new Quotes("When something is important enough, you do it even if the odds are not in your favor.", "Elon Musk", "Eric Wathome")
  ]

  ngOnInit(): void {
  }

}
