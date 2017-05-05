import {SafeUrlPipe} from './safe-url.pipe';
import {SafeStylePipe} from './safe-style.pipe';
import {NgModule} from '@angular/core';

const URL_PIPES = [
  SafeUrlPipe
];

@NgModule({
  declarations: URL_PIPES,
  imports: [],
  exports: URL_PIPES
})
export class NgUrlPipesModule {}

export {SafeUrlPipe} from './safe-url.pipe';
export {SafeStylePipe} from './safe-style.pipe';
