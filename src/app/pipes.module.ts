import {NgModule} from '@angular/core';
import {ARRAY_PIPES} from "./pipes/array/array";
import {STRING_PIPES} from "./pipes/string/string";
import {MATH_PIPES} from "./pipes/math/math";
import {BOOLEAN_PIPES} from "./pipes/boolean/boolean";


@NgModule({
  exports: [...STRING_PIPES, ...ARRAY_PIPES, ...MATH_PIPES, ...BOOLEAN_PIPES]
})
export class NgPipesModule {}
