import { NgModule } from '@angular/core';
import {TimeAgoPipe} from './time-ago';

export const DATE_PIPES = [
  TimeAgoPipe
];

@NgModule({
  declarations: DATE_PIPES,
  imports: [],
  exports: DATE_PIPES,
})
export class NgDatePipesModule {}

export { TimeAgoPipe } from './time-ago';
