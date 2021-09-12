import { NgModule } from '@angular/core';
import { TimeAgoPipe } from './time-ago';
import { TimeToPipe } from './time-to.pipe';

export const DATE_PIPES = [TimeAgoPipe, TimeToPipe];

@NgModule({
  declarations: DATE_PIPES,
  imports: [],
  exports: DATE_PIPES,
})
export class NgDatePipesModule {}

export { TimeAgoPipe } from './time-ago';
export { TimeToPipe } from './time-to.pipe';
