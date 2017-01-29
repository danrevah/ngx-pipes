import {DiffPipe} from './diff';
import {InitialPipe} from './initial';
import {FlattenPipe} from './flatten';
import {IntersectionPipe} from './intersection';
import {ReversePipe} from './reverse';
import {TailPipe} from './tail';
import {TrurthifyPipe} from './truthify';
import {UnionPipe} from './union';
import {UniquePipe} from './unique';
import {WithoutPipe} from './without';
import {PluckPipe} from './pluck';
import {ShufflePipe} from './shuffle';
import {EveryPipe} from './every';
import {SomePipe} from './some';
import {SamplePipe} from './sample';
import {GroupByPipe} from './group-by';
import {FilterByPipe} from './filter-by';
import {NgModule} from '@angular/core';
import {OrderByPipe} from './order-by';

const ARRAY_PIPES = [
  DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe,
  TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe,
  EveryPipe, SomePipe, SamplePipe, GroupByPipe, FilterByPipe, OrderByPipe
];

@NgModule({
  declarations: ARRAY_PIPES,
  imports: [],
  exports: ARRAY_PIPES
})
export class NgArrayPipesModule {
}

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
export * from './group-by';
export * from './filter-by';
