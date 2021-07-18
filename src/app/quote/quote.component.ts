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
    new Quotes("When something is important enough, you do it even if the odds are not in your favor.", "Elon Musk", "Eric Wathome", new Date(2020, 11, 14)),
    new Quotes("If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.", "Elon Musk", "Eric Wathome", new Date(2020, 11, 14)),
  ]

  addNewQuote(quote:Quotes){
    quote.submittedDate = new Date(quote.submittedDate);
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
      let getLikes = <any>document.getElementsByClassName("like");
  
      // console.log(this.quotes[index].upvote)
      console.log(typeof getLikes)
      for (let i = 0; i < getLikes.length; i++){
        let elementOne = getLikes[i].children[1].innerText[i];
        
        console.log(elementOne);
        // console.log(elementTwo);
        // console.log(`element 1 = ${elementOne + 1}`);
        // console.log(`element 2 = ${elementTwo + 1}`);
      }
    }
  }

  ngOnInit(): void {
  }

}
