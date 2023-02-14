import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgs]'
})
export class ImgsDirective {

  @Input()
  @HostBinding('src')
  src: string;

  @Input() appImgs: string;

  @HostListener('error')
  onError() {
    this.src = 'assets/images/default.jpg'
  }
}
