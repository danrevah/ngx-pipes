import { PipeTransform } from '@angular/core';
export declare class FlattenPipe implements PipeTransform {
    transform(array: any[], [shallow]?: any[]): any[];
    private flatten(array);
}
