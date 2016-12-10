import { KeysPipe } from './keys';
import { ValuesPipe } from './values';
import { PairsPipe } from './pairs';
import { NgModule } from '@angular/core';

const OBJECT_PIPES = [
  KeysPipe, ValuesPipe, PairsPipe
];

@NgModule({
  declarations: [ ...OBJECT_PIPES ],
  imports: [],
  exports: [ ...OBJECT_PIPES ]
})
export class NgObjectPipesModule {}

export * from './keys';
export * from './values';
export * from './pairs';
