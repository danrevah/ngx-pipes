import { DiffPipe } from "./diff";
import { InitialPipe } from "./initial";
import { FlattenPipe } from "./flatten";
import { IntersectionPipe } from "./intersection";
import { ReversePipe } from "./reverse";
import { TailPipe } from "./tail";
import { TrurthifyPipe } from "./truthify";
import { UnionPipe } from "./union";
import { UniquePipe } from "./unique";
import { WithoutPipe } from "./without";
import { PluckPipe } from "./pluck";
import { ShufflePipe } from "./shuffle";
import { EveryPipe } from "./every";
import { SomePipe } from "./some";
import { SamplePipe } from "./sample";
import { GroupByPipe } from "./group-by";
import { FilterByPipe } from "./filter-by";
import { OrderByPipe } from "./order-by";
import { NgModule } from "@angular/core";
import { GroupByImpurePipe } from "./group-by-impure";
import { FilterByImpurePipe } from "./filter-by-impure";
import { OrderByImpurePipe } from "./order-by-impure";
import { RangePipe } from "./range";

const ARRAY_PIPES = [
  DiffPipe,
  FlattenPipe,
  InitialPipe,
  IntersectionPipe,
  ReversePipe,
  TailPipe,
  TrurthifyPipe,
  UnionPipe,
  UniquePipe,
  WithoutPipe,
  PluckPipe,
  ShufflePipe,
  EveryPipe,
  SomePipe,
  SamplePipe,
  GroupByPipe,
  GroupByImpurePipe,
  FilterByPipe,
  FilterByImpurePipe,
  OrderByPipe,
  OrderByImpurePipe,
  RangePipe,
];

@NgModule({
  declarations: ARRAY_PIPES,
  imports: [],
  exports: ARRAY_PIPES,
})
export class NgArrayPipesModule {}

export { DiffPipe } from "./diff";
export { InitialPipe } from "./initial";
export { FlattenPipe } from "./flatten";
export { IntersectionPipe } from "./intersection";
export { ReversePipe } from "./reverse";
export { TailPipe } from "./tail";
export { TrurthifyPipe } from "./truthify";
export { UnionPipe } from "./union";
export { UniquePipe } from "./unique";
export { WithoutPipe } from "./without";
export { PluckPipe } from "./pluck";
export { ShufflePipe } from "./shuffle";
export { EveryPipe } from "./every";
export { SomePipe } from "./some";
export { SamplePipe } from "./sample";
export { GroupByPipe } from "./group-by";
export { FilterByPipe } from "./filter-by";
export { OrderByPipe } from "./order-by";
export { GroupByImpurePipe } from "./group-by-impure";
export { FilterByImpurePipe } from "./filter-by-impure";
export { OrderByImpurePipe } from "./order-by-impure";
export { RangePipe } from "./range";
