import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.fontWeight = 'Italic';
    this.elementRef.nativeElement.style.fontSize = '20px';
    this.elementRef.nativeElement.style.color = 'blue';
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.fontWeight = 'normal';
    this.elementRef.nativeElement.style.fontSize = 'initial';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.backgroundColor = 'initial';
  }
}
