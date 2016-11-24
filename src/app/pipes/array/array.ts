import {DiffPipe} from "./diff";
import {InitialPipe} from "./initial";
import {FlattenPipe} from "./flatten";
import {IntersectionPipe} from "./intersection";
import {RangePipe} from "./range";
import {ReversePipe} from "./reverse";
import {TailPipe} from "./tail";
import {TrurthifyPipe} from "./truthify";
import {UnionPipe} from "./union";
import {UniquePipe} from "./unique";
import {WithoutPipe} from "./without";

export const ARRAY_PIPES = [
  DiffPipe, FlattenPipe, InitialPipe, IntersectionPipe, RangePipe, ReversePipe, TailPipe,
  TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe
];
