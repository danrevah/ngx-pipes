import {NgModule} from '@angular/core';
import {ARRAY_PIPES} from "./pipes/array/array";
import {STRING_PIPES} from "./pipes/string/string";
import {MATH_PIPES} from "./pipes/math/math";


@NgModule({
  declarations: [...STRING_PIPES, ...ARRAY_PIPES, ...MATH_PIPES],
  imports: [],
  exports: [...STRING_PIPES, ...ARRAY_PIPES, ...MATH_PIPES]
})
export class NgPipesModule {}
