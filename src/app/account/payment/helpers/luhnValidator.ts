import { ValidatorFn, AbstractControl } from '@angular/forms';
import { luhnCheck } from './luhn.helper';

export function luhnValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = luhnCheck(control.value);
    let string: string = "";
    for(let i = 0; i < control.value.length; i++) {
      string = control.value.replace(" ", "");
    }

    return isValid && string.length >= 12 ? null : { luhnCheck: isValid };
  };
}

export function testValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const errors = dateCheck(control.value)
    return !errors ? null : errors;
  }
}

function dateCheck(value: string): Record<string, unknown> | null {
  const [month, year] = value.split("/");
  const errors: Record<string, unknown> = {};

  const currentYear = new Date().getFullYear() - 2000;
  const currentMonth = new Date().getMonth() + 1;

  if(!(+year >= currentYear)) {
    errors['yearError'] = {
      yearError: currentYear,
      actual: year,
    }
  }

  if(!(+month > currentMonth && +month < 13 && +month > 0 )){
    errors['monthError'] = {
      monthError: currentMonth,
      actual: month,
    };
  }

  return Object.keys(errors).length ? errors : null;
}
