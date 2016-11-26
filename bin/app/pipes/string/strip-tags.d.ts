import { PipeTransform } from '@angular/core';
export declare class StripTagsPipe implements PipeTransform {
    transform(text: string, ...allowedTags: any[]): string;
}
