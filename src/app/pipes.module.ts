import {NgModule} from '@angular/core';
import {NgArrayPipesModule} from './pipes/array';
import {NgStringPipesModule} from './pipes/string';
import {NgMathPipesModule} from './pipes/math';
import {NgBooleanPipesModule} from './pipes/boolean';

@NgModule({
  declarations: [],
  imports: [],
  exports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule]
})
export class NgPipesModule {}

export * from './pipes/array';
export * from './pipes/string';
export * from './pipes/math';
export * from './pipes/boolean';
