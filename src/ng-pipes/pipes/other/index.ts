import { NgModule } from '@angular/core';
import { AjaxGetJsonPipe } from './ajax-get-json';
import { HttpClientModule } from '@angular/common/http';

export const AJAX_PIPES = [AjaxGetJsonPipe];

@NgModule({
  declarations: AJAX_PIPES,
  imports: [HttpClientModule],
  exports: AJAX_PIPES,
})
export class NgAJAXPipesModule {
}

export {AjaxGetJsonPipe} from './ajax-get-json';
