import { PipeTransform } from '@angular/core';
export declare class IsLessThanPipe implements PipeTransform {
    transform(value: number, other: number): boolean;
}
