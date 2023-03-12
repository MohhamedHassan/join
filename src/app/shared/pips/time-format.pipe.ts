import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  constructor(private datePipe:DatePipe){}
  transform(time:string,index:number): unknown {
    if(time) {
      let split = time.split('-')
      let times = split[index].split(':');
      let dateTime = new Date();
      dateTime.setHours(parseInt(times[0]));
      dateTime.setMinutes(parseInt(times[1]));
      dateTime.setSeconds(parseInt(times[2]));
      return  this.datePipe.transform(dateTime, 'h:mm a')
    }
    return
  }

}
