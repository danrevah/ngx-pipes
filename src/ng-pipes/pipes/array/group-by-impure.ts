import { Pipe } from '@angular/core';
import { GroupByPipe } from './group-by';

// tslint:disable use-pipe-transform-interface
@Pipe({
  name: 'groupByImpure',
  pure: false,
  standalone: true,
})
export class GroupByImpurePipe extends GroupByPipe {}
