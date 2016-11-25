import { PipeTransform } from '@angular/core';
export declare class RoundPipe implements PipeTransform {
    transform(num: number, precision?: number): number;
}
