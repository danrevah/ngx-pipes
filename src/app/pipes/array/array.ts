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

export const ARRAY_PIPES = [
  DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, ReversePipe, TailPipe,
  TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe,
  EveryPipe, SomePipe, SamplePipe
];
