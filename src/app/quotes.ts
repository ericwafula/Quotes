export class Quotes {
    quote: string;
    author: string;
    contributor: string;
    date: string;

    constructor(quote: string, author: string, contributor: string){
        this.quote = quote;
        this.author = author;
        this.contributor = contributor;
        this.date = "";
    }
}
