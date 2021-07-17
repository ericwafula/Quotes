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
    new Quotes("When something is important enough, you do it even if the odds are not in your favor.", "Elon Musk", "Eric Wathome", new Date(2020, 11, 14), 0),
    new Quotes("If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.", "Elon Musk", "Eric Wathome", new Date(2021, 1, 10), 0),
    new Quotes("If you're trying to create a company, it's like baking a cake. You have to have all the ingredients in the right proportion.", "Elon Musk", "Eric Wathome", new Date(2021, 12, 6), 0)
  ]

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
