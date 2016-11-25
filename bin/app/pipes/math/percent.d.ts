import { PipeTransform } from '@angular/core';
export declare class PercentPipe implements PipeTransform {
    transform(num: number, total?: number, floor?: boolean): number;
}
