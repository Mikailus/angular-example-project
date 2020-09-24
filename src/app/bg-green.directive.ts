import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgGreen]'
})
export class BgGreenDirective implements OnInit {
  @Input('appBgGreen') index: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.index % 2 === 1) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#32ba62');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    }
  }
}
