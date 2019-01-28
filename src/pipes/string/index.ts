import { NgModule } from "@angular/core";
import { AorAnPipe } from "./a-or-an";
import { UcWordsPipe } from "./ucwords";
import { LeftTrimPipe } from "./ltrim";
import { RepeatPipe } from "./repeat";
import { RightTrimPipe } from "./rtrim";
import { ScanPipe } from "./scan";
import { ShortenPipe } from "./shorten";
import { StripTagsPipe } from "./strip-tags";
import { TrimPipe } from "./trim";
import { UcFirstPipe } from "./ucfirst";
import { SlugifyPipe } from "./slugify";
import { CamelizePipe } from "./camelize";
import { LatinisePipe } from "./latinise";
import { LinesPipe } from "./lines";
import { UnderscorePipe } from "./underscore";
import { MatchPipe } from "./match";
import { TestPipe } from "./test";
import { LeftPadPipe } from "./lpad";
import { RightPadPipe } from "./rpad";
import { MakePluralStringPipe } from "./pluralize";
import { WrapPipe } from "./wrap";

export const STRING_PIPES = [
  AorAnPipe,
  LeftTrimPipe,
  RepeatPipe,
  RightTrimPipe,
  ScanPipe,
  ShortenPipe,
  StripTagsPipe,
  TrimPipe,
  UcFirstPipe,
  UcWordsPipe,
  SlugifyPipe,
  CamelizePipe,
  LatinisePipe,
  LinesPipe,
  UnderscorePipe,
  MatchPipe,
  TestPipe,
  LeftPadPipe,
  RightPadPipe,
  MakePluralStringPipe,
  WrapPipe,
];

@NgModule({
  declarations: STRING_PIPES,
  imports: [],
  exports: STRING_PIPES,
})
export class NgStringPipesModule {}

export { AorAnPipe } from "./a-or-an";
export { UcWordsPipe } from "./ucwords";
export { LeftTrimPipe } from "./ltrim";
export { RepeatPipe } from "./repeat";
export { RightTrimPipe } from "./rtrim";
export { ScanPipe } from "./scan";
export { ShortenPipe } from "./shorten";
export { StripTagsPipe } from "./strip-tags";
export { TrimPipe } from "./trim";
export { UcFirstPipe } from "./ucfirst";
export { SlugifyPipe } from "./slugify";
export { CamelizePipe } from "./camelize";
export { LatinisePipe } from "./latinise";
export { LinesPipe } from "./lines";
export { UnderscorePipe } from "./underscore";
export { MatchPipe } from "./match";
export { TestPipe } from "./test";
export { LeftPadPipe } from "./lpad";
export { RightPadPipe } from "./rpad";
export { MakePluralStringPipe } from "./pluralize";
export { WrapPipe } from "./wrap";
