import { Pipe } from '@angular/core';
import { FilterByPipe } from './filter-by';

// tslint:disable use-pipe-transform-interface
@Pipe({
  name: 'filterByImpure',
  pure: false,
  standalone: true,
})
export class FilterByImpurePipe extends FilterByPipe {}
