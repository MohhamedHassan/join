import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMemberDefaultImg]'
})
export class MemberDefaultImgDirective {
  @Input('appMemberDefaultImg') gender

  @Input()
  @HostBinding('src')
  src: string;

  @Input() appImgs: string;

  @HostListener('error')
  onError() {
    if(this.gender=="GIRL") this.src = "assets/images/girl.png"
    else if(this.gender=="BOY") this.src = "assets/images/boy.png"
  }
  constructor() {console.log('test')}
}
