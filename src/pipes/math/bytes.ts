import { Pipe, PipeTransform } from "@angular/core";
import { applyPrecision, isNumberFinite, isUndefined } from "../helpers/helpers";

@Pipe({ name: "bytes" })
export class BytesPipe implements PipeTransform {
  private dictionary: Array<{ max: number; type: string }> = [
    { max: 1024, type: "B" },
    { max: 1048576, type: "KB" },
    { max: 1073741824, type: "MB" },
    { max: 1.0995116e12, type: "GB" },
  ];

  transform(value: number, precision?: number | undefined): string | number {
    if (!isNumberFinite(value)) {
      return NaN;
    }

    const format = this.dictionary.find(d => value < d.max) || this.dictionary[this.dictionary.length - 1];
    const calc = value / (format.max / 1024);
    const num = isUndefined(precision) ? calc : applyPrecision(calc, precision);

    return `${num} ${format.type}`;
  }
}
