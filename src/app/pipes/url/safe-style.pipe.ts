import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeStyle'})
export class SafeStylePipe implements PipeTransform {

	constructor(private domSanitizer: DomSanitizer) {}

	transform(url: any) {
		return this.domSanitizer.bypassSecurityTrustStyle(url);
	}
}
