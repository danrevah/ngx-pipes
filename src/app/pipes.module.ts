import {NgModule} from '@angular/core';
import {NgArrayPipesModule} from './pipes/array';
import {NgObjectPipesModule} from './pipes/object';
import {NgStringPipesModule} from './pipes/string';
import {NgMathPipesModule} from './pipes/math';
import {NgBooleanPipesModule} from './pipes/boolean';

@NgModule({
  declarations: [],
  imports: [],
  exports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule]
})
export class NgPipesModule {}

export * from './pipes/array';
export * from './pipes/object';
export * from './pipes/string';
export * from './pipes/math';
export * from './pipes/boolean';
