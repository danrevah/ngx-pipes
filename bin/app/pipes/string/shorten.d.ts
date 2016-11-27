import { PipeTransform } from '@angular/core';
export declare class ShortenPipe implements PipeTransform {
    transform(text: string, length?: number, suffix?: string, wordBreak?: boolean): string;
}
