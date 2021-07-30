import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maiuculas'
})
export class MaiuculasPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
