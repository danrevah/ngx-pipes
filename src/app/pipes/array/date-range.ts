import { PipeTransform, Pipe } from '@angular/core';
import { extractDeepPropertyByMapKey } from '../helpers/helpers';

@Pipe({ name: 'dateRange' })
export class DateRangePipe implements PipeTransform {

    transform(input: any, prop: string, minDate?: string | Date, maxDate?: string | Date): any[] {
        if (!Array.isArray(input)) {
            return input;
        }

        let min = this.transformDate(minDate);
        let max = this.transformDate(maxDate);

        if (!!!isNaN(min) && !!!isNaN(max)) {
            return this.between(input, prop, min, max);
        }

        if (!!!isNaN(min)) {
            return this.min(input, prop, min);
        }

        if (!!!isNaN(max)) {
            return this.max(input, prop, max);
        }

        return input;
    }

    private transformDate(date: string | Date): number {
        return (date instanceof Date) ? date.valueOf() : Date.parse(date);
    }



    private between(input: any, prop: string, minDate: number, maxDate: number): any[] {
        return input.filter((obj: any) => {
            const value: string | Date = extractDeepPropertyByMapKey(obj, prop);
            let compare = this.transformDate(value);
            if (!!isNaN(compare)) {
                return false;
            }

            return compare > minDate && compare < maxDate;
        });

    }

    private min(input: any, prop: string, minDate: number): any[] {
        return input.filter((obj: any) => {

            const value: string | Date = extractDeepPropertyByMapKey(obj, prop);
            let compare = this.transformDate(value);

            if (!!isNaN(compare)) {
                return false;
            }

            return compare > minDate;
        });
    }

    private max(input: any, prop: string, maxDate: number): any[] {
        return input.filter((obj: any) => {

            const value: string | Date = extractDeepPropertyByMapKey(obj, prop);
            let compare = this.transformDate(value);

            if (!!isNaN(compare)) {
                return false;
            }
            return compare < maxDate;
        });
    }

}