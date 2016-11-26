import { PipeTransform } from '@angular/core';
export declare class RepeatPipe implements PipeTransform {
    transform(str: string, [n, separator]?: any[]): string;
    private repeat(str, n, separator);
}
