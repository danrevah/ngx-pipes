import { PipeTransform } from '@angular/core';
export declare class IsGreaterThanPipe implements PipeTransform {
    transform(value: number, other: number): boolean;
}
