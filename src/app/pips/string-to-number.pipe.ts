import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToNumber'
})
export class StringToNumberPipe implements PipeTransform {

  transform(string) {
    return Number(string);
  }

}
