import { PipeTransform } from '@angular/core';
export declare class IsGreaterEqualThanPipe implements PipeTransform {
    transform(value: number, other: number): boolean;
}
