export class Quotes {
    quote: string;
    author: string;
    contributor: string;
    submittedDate: Date;
    upvote: number;

    constructor(quote: string, author: string, contributor: string, submittedDate: Date){
        this.quote = quote;
        this.author = author;
        this.contributor = contributor;
        this.submittedDate = submittedDate;
        this.upvote = 0;
    }
}
