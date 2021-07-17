import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { QuoteComponent } from './quote/quote.component';
import { DetailsComponent } from './details/details.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    LeftSectionComponent,
    QuoteComponent,
    DetailsComponent,
    DateCountPipe,
    HighlightDirective,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
