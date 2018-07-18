import { NgModule } from "@angular/core";
import { MaxPipe } from "./max";
import { MinPipe } from "./min";
import { PercentagePipe } from "./percentage";
import { SumPipe } from "./sum";
import { FloorPipe } from "./floor";
import { RoundPipe } from "./round";
import { SqrtPipe } from "./sqrt";
import { PowerPipe } from "./pow";
import { CeilPipe } from "./ceil";
import { DegreesPipe } from "./degrees";
import { BytesPipe } from "./bytes";
import { RadiansPipe } from "./radians";

export const MATH_PIPES = [
  MaxPipe,
  MinPipe,
  PercentagePipe,
  SumPipe,
  FloorPipe,
  RoundPipe,
  SqrtPipe,
  PowerPipe,
  CeilPipe,
  DegreesPipe,
  BytesPipe,
  RadiansPipe,
];

@NgModule({
  declarations: MATH_PIPES,
  imports: [],
  exports: MATH_PIPES,
})
export class NgMathPipesModule {}

export { MaxPipe } from "./max";
export { MinPipe } from "./min";
export { PercentagePipe } from "./percentage";
export { SumPipe } from "./sum";
export { FloorPipe } from "./floor";
export { RoundPipe } from "./round";
export { SqrtPipe } from "./sqrt";
export { PowerPipe } from "./pow";
export { CeilPipe } from "./ceil";
export { DegreesPipe } from "./degrees";
export { BytesPipe } from "./bytes";
