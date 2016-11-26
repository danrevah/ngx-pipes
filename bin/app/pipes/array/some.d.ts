import { PipeTransform } from '@angular/core';
export declare class SomePipe implements PipeTransform {
    transform(arr: any[], predicate: (value: any, index: number, array: any[]) => boolean): boolean;
}
