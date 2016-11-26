import { PipeTransform } from '@angular/core';
export declare class EveryPipe implements PipeTransform {
    transform(arr: any[], predicate: (value: any, index: number, array: any[]) => boolean): boolean;
}
