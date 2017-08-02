import {Pipe} from '@angular/core';
import {OrderByPipe} from './order-by';

@Pipe({name: 'orderByImpure'})
export class OrderByImpurePipe extends OrderByPipe {}
