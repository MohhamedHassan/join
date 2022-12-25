import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tofixednumber'
})
export class TofixednumberPipe implements PipeTransform {

  transform(value:any): any {
    console.log(value)
    if(value) return Number(value).toFixed(2)
    return ;
  }

}
