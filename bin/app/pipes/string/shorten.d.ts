import { PipeTransform } from '@angular/core';
export declare class ShortenPipe implements PipeTransform {
    transform(text: string, [length, suffix, wordBreak]?: any[]): string;
}
