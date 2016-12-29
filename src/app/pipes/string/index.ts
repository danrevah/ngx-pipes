import {NgModule} from '@angular/core';
import {UcWordsPipe} from './ucwords';
import {LeftTrimPipe} from './ltrim';
import {RepeatPipe} from './repeat';
import {RightTrimPipe} from './rtrim';
import {ScanPipe} from './scan';
import {ShortenPipe} from './shorten';
import {StripTagsPipe} from './strip-tags';
import {TrimPipe} from './trim';
import {UcFirstPipe} from './ucfirst';
import {SlugifyPipe} from './slugify';
import {CamelizePipe} from './camelize';
import {LatinisePipe} from './latinise';
import {LinesPipe} from './lines';
import {UnderscorePipe} from './underscore';
import {MatchPipe} from './match';
import {TestPipe} from './test';
import {LeftPadPipe} from './lpad';
import {RightPadPipe} from './rpad';

export const STRING_PIPES = [
  LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe,
  StripTagsPipe, TrimPipe, UcFirstPipe, UcWordsPipe, SlugifyPipe,
  CamelizePipe, LatinisePipe, LinesPipe, UnderscorePipe, MatchPipe,
  TestPipe, LeftPadPipe, RightPadPipe
];

@NgModule({
  declarations: STRING_PIPES,
  imports: [],
  exports: STRING_PIPES
})
export class NgStringPipesModule {}

export * from './ucwords';
export * from './ltrim';
export * from './repeat';
export * from './rtrim';
export * from './scan';
export * from './shorten';
export * from './strip-tags';
export * from './trim';
export * from './ucfirst';
export * from './slugify';
export * from './camelize';
export * from './latinise';
export * from './lines';
export * from './underscore';
export * from './match';
export * from './test';
export * from './lpad';
export * from './rpad';
