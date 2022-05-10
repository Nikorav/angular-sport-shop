import {Pipe, PipeTransform} from "@angular/core";

enum ErrorKey {
  REQUIRED = "required",
  YEAR = "yearError",
  MONTH = "monthError",
  MIN = "min",
  MAX = "max",
  MOON = "luhnCheck",
  MIN_LENGTH = "minlength"
}

type ErrorPipeOptions = {
  type: string,
  value: string | number,
  field?: string,
  actual?: string,
}

@Pipe({
  pure: true,
  name: "errorPipe",
})
export class ErrorPipe implements PipeTransform {

  public readonly ErrorTextMap: Record<ErrorKey | string, string> = {
    [ErrorKey.REQUIRED]: "Поле не должно быть пустым",
    [ErrorKey.MONTH]: "Месяц должен быть больше {number}",
    [ErrorKey.YEAR]: "Год должен быть больше или равен {number} ",
    [ErrorKey.MAX]: "Максимальное значение поля: {number}",
    [ErrorKey.MIN]: "Минимальное значение поля: {number}",
    [ErrorKey.MOON]: "Номер карты невалиден",
    [ErrorKey.MIN_LENGTH]: "Длина не должна быть меньше {number}, текущая длина {actual}"
  }

  transform(value: any, options: ErrorPipeOptions): string {
    const {type} = options;
    return !type ? value : this.replaceStringWithConditions(type, options);
  }

  private replaceStringWithConditions(type: string, options: ErrorPipeOptions): string {
    const {value, field, actual} = options;
    return this.ErrorTextMap[type]
      .replace("{field}", field ?? "")
      .replace("{number}", `${value}`)
      .replace("{actual}", `${actual ?? ""}`)
  }
}
