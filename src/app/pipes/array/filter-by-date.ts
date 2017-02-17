import { PipeTransform, Pipe } from '@angular/core';
import { extractDeepPropertyByMapKey } from '../helpers/helpers';
import * as moment from 'moment';

@Pipe({ name: 'filterByDate' })
export class FilterByDatePipe implements PipeTransform {

    transform(input: any, prop: string, minDate?: string, maxDate?: string): any[] {
        if (!Array.isArray(input)) {
            return input;
        }
        let min = moment(minDate);
        let max = moment(maxDate);

        if (min.isValid() && max.isValid()) {
            return this.between(input, prop, min, max);
        }

        if (min.isValid()) {
            return this.min(input, prop, min);
        }

        if (max.isValid()) {
            return this.max(input, prop, max);
        }

        return input;
    }

    private between(input: any, prop: string, minDate: moment.Moment, maxDate: moment.Moment): any[] {
        return input.filter((obj: any) => {
            const value: string =
                String(extractDeepPropertyByMapKey(obj, prop));

            let compare = moment(value);

            if (!compare.isValid()) {
                return false;
            }

            return compare.isBetween(minDate, maxDate);
        });

    }

    private min(input: any, prop: string, minDate: moment.Moment): any[] {
        return input.filter((obj: any) => {

            const value: string =
                String(extractDeepPropertyByMapKey(obj, prop));

            let compare = moment(value);

            if (!compare.isValid()) {
                return false;
            }

            return compare.isAfter(minDate, null);
        });
    }

    private max(input: any, prop: string, maxDate: moment.Moment): any[] {
        return input.filter((obj: any) => {

            const value: string =
                String(extractDeepPropertyByMapKey(obj, prop));

            let compare = moment(value);

            if (!compare.isValid()) {
                return false;
            }

            return compare.isBefore(maxDate);
        });
    }

}