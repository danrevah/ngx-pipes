import {Pipe} from '@angular/core';
import {OrderByPipe} from './order-by';

@Pipe({name: 'orderByImpure', pure: false})
export class OrderByImpurePipe extends OrderByPipe {}
