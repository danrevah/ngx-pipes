import { PipeTransform } from '@angular/core';
export declare class CeilPipe implements PipeTransform {
    transform(num: number, precision?: number): number;
}
