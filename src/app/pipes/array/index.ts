import { DiffPipe } from './diff';
import { InitialPipe } from './initial';
import { FlattenPipe } from './flatten';
import { IntersectionPipe } from './intersection';
import { ReversePipe } from './reverse';
import { TailPipe } from './tail';
import { TrurthifyPipe } from './truthify';
import { UnionPipe } from './union';
import { UniquePipe } from './unique';
import { WithoutPipe } from './without';
import { PluckPipe } from './pluck';
import { ShufflePipe } from './shuffle';
import { EveryPipe } from './every';
import { SomePipe } from './some';
import { SamplePipe } from './sample';
import { GroupByPipe } from './group-by';
import { KeysPipe } from './keys';
import { ValuesPipe } from './values';
import { NgModule } from '@angular/core';

const ARRAY_PIPES = [
  DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe,
  TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe,
  EveryPipe, SomePipe, SamplePipe, GroupByPipe, KeysPipe, ValuesPipe
];

@NgModule({
  declarations: [ ...ARRAY_PIPES ],
  imports: [],
  exports: [ ...ARRAY_PIPES ]
})
export class NgArrayPipesModule { }

export * from './diff';
export * from './initial';
export * from './flatten';
export * from './intersection';
export * from './reverse';
export * from './tail';
export * from './truthify';
export * from './union';
export * from './unique';
export * from './without';
export * from './pluck';
export * from './shuffle';
export * from './every';
export * from './some';
export * from './sample';
export * from './keys';
export * from './values';
export * from './group-by';
