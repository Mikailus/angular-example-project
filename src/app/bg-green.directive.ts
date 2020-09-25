import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgGreen]'
})
export class BgGreenDirective implements OnChanges {
  @Input('appBgGreen') index: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.index % 2 === 1) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#32ba62');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }
}
