import {NgModule} from '@angular/core';
import {ARRAY_PIPES} from "./pipes/array/array";
import {STRING_PIPES} from "./pipes/string/string";


@NgModule({
  declarations: [...STRING_PIPES, ...ARRAY_PIPES],
  imports: [],
  exports: [...STRING_PIPES, ...ARRAY_PIPES]
})

export class PipesModule {
}
