import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  private textTeco(action: string){
    this.elem.nativeElement.style.textDecoration = action;
  }

}
