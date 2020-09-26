import { AbstractControl } from '@angular/forms';

export function digits(control: AbstractControl): {[key: string]: any} {
  if (!(/^\d+$/.test(control.value))) {
    return {
      digits: true
    };
  }
}
