import { NgModule } from '@angular/core';
import { TimeAgoPipe } from './time-ago';
import { TimeRemainingPipe } from './time-remaining';

export const DATE_PIPES = [TimeAgoPipe, TimeRemainingPipe];

@NgModule({
  declarations: DATE_PIPES,
  imports: [],
  exports: DATE_PIPES,
})
export class NgDatePipesModule {}

export { TimeAgoPipe } from './time-ago';
export { TimeRemainingPipe } from './time-remaining';
