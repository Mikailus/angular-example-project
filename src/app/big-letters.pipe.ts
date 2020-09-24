import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigLetters'
})
export class BigLettersPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }
}
