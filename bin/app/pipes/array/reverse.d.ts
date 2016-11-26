import { PipeTransform } from '@angular/core';
export declare class ReversePipe implements PipeTransform {
    transform(value: string): string;
    transform(value: any[]): any[];
}
