import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdDate'
})
export class CreatedDatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const createdDateArray =  value.split(' ');
    const createdDateString = createdDateArray[0] + ' ' + createdDateArray[1] + ' ' + createdDateArray[2];
    return Math.floor((new Date().getTime() - new Date(createdDateString).getTime()) / 1000 / 60 / 60 / 24);
  }

}
