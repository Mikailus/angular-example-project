import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgMouseover]'
})
export class BgMouseoverDirective {
  @HostBinding('style.backgroundColor') background: string;
  @HostListener('mouseover') onmouseover(): void {
    this.background = '#90cc54';
  }

  @HostListener('mouseout') onmouseout(): void {
    this.background = null;
  }
}
