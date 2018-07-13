import { KeysPipe } from "./keys";
import { ValuesPipe } from "./values";
import { PairsPipe } from "./pairs";
import { PickPipe } from "./pick";
import { OmitPipe } from "./omit";
import { InvertPipe } from "./invert";
import { InvertByPipe } from "./invert-by";
import { DiffObjPipe } from "./diff-obj";
import { NgModule } from "@angular/core";

const OBJECT_PIPES = [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe];

@NgModule({
  declarations: OBJECT_PIPES,
  imports: [],
  exports: OBJECT_PIPES,
})
export class NgObjectPipesModule {}

export { KeysPipe } from "./keys";
export { ValuesPipe } from "./values";
export { PairsPipe } from "./pairs";
export { PickPipe } from "./pick";
export { OmitPipe } from "./omit";
export { InvertPipe } from "./invert";
export { InvertByPipe } from "./invert-by";
export { DiffObjPipe } from "./diff-obj";
