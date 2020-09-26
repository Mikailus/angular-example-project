import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgMouseover]'
})
export class BgMouseoverDirective {
  @HostBinding('style.backgroundColor') background: string;
  @HostListener('mouseover') onmouseover(): void {
    this.background = 'rgba(0, 0, 100, 1)';
  }

  @HostListener('mouseout') onmouseout(): void {
    this.background = null;
  }
}
