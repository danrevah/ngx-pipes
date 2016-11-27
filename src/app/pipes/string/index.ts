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

export const STRING_PIPES = [
  LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe,
  StripTagsPipe, TrimPipe, UcFirstPipe, UcWordsPipe
];

@NgModule({
  declarations: [...STRING_PIPES],
  imports: [],
  exports: [...STRING_PIPES]
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
