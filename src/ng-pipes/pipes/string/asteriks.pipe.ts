import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';
@Pipe({
    name: 'asteriks'
})
export class AsteriksPipe implements PipeTransform {
    transform(input: string, size: number): string;
    transform(input: any, size: number): any;

    transform(text: any, size: number): string {
        if (!isString(text)) {
            return text;
        }

        const length = text.length;
        let builder = '';

        if (length > size * 2) {
            builder = text.substring(0, size);
            for (let i = 0; i < length - (size * 2); i++) {
                builder += '*';
            }
            builder += text.substring(length - size, length);
            return builder;
        }
        else {
            return text;
        }
    }
}
