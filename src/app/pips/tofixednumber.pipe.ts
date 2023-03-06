import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tofixednumber'
})
export class TofixednumberPipe implements PipeTransform {

  transform(value:any): any {
    if(value<0)   return Number(0).toFixed(2)
    else if(value||value==0) return Number(value).toFixed(2)
    return ;
  }

}
