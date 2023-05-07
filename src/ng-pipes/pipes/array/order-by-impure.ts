import { Pipe } from '@angular/core';
import { OrderByPipe } from './order-by';

// tslint:disable use-pipe-transform-interface
@Pipe({
  name: 'orderByImpure',
  pure: false,
  standalone: true,
})
export class OrderByImpurePipe extends OrderByPipe {}
