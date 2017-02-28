import {NgModule} from '@angular/core';
import {NgArrayPipesModule} from './pipes/array/index';
import {NgObjectPipesModule} from './pipes/object/index';
import {NgStringPipesModule} from './pipes/string/index';
import {NgMathPipesModule} from './pipes/math/index';
import {NgBooleanPipesModule} from './pipes/boolean/index';

@NgModule({
  declarations: [],
  imports: [],
  exports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule]
})
export class NgPipesModule {}
