import { PipeTransform } from '@angular/core';
export declare class RangePipe implements PipeTransform {
    transform(max: number, [step]?: any[]): any[];
}
