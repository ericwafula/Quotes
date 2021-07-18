import { Quote } from '@angular/compiler';
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
    new Quotes("When something is important enough, you do it even if the odds are not in your favor.", "Elon Musk", "Eric Wathome", new Date(2020, 11, 14))
  ]


  

  addNewQuote(quote:Quotes){
    // quote.submittedDate = new Date(quote.submittedDate);
    this.quotes.push(quote);
  }

  deleteCard(isToDelete: boolean, index: number){
    isToDelete = confirm("Are you sure you want to delete this Quote?");

    if (isToDelete){
      this.quotes.splice(index, 1);
    }
  }

  increaseLikes(toIncreaseLikes: boolean, index: number){
    if (toIncreaseLikes){
      this.quotes[index].upvote++;
    }
  }

  ngOnInit(): void {
  }

}
