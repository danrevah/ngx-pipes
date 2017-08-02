import {Pipe} from '@angular/core';
import {FilterByPipe} from './filter-by';

@Pipe({name: 'filterByImpure', pure: false})
export class FilterByImpurePipe extends FilterByPipe {}
