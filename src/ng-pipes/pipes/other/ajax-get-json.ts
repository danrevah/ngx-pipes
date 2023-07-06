import {Pipe, PipeTransform} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

/**
 * get$ pipe result wrapper.
 */
export class ResultWrapper {
  /**
   * is request server success.
   */
  readonly success: boolean = false;
  /**
   * requested raw data
   */
  readonly data?: any | any[];
  /**
   * request state message.
   */
  readonly message?: string;

  constructor(success: boolean, data: any | any[], message: string) {
    this.success = success;
    this.data = data;
    this.message = message;
  }

  /**
   * if ajax request result is not null and type is array(length > 0) or object(keys.length > 0)
   * return true, otherwise return false.
   */
  get valid(): boolean {
    if (this.data) {
      if (this.data instanceof Array) {
        return this.data.length > 0;
      }
      return Object.keys(this.data).length > 0;
    }
    return false;
  }
}

/**
 * Simple http GET request pipe for angular template, display the ajax result quickly and lightly.
 *
 * ### Notice:
 * The result is a wrapper(Observable<Result>) of your result from the api.
 *
 * Result: `{success: boolean, data?: any | any[], message: string, valid: boolean}`
 *
 * Result#data: your actual result.
 *
 * Result#valid: `result.data` is not `null`, `undefined`, `length > 0`(array) and `{field:...}`(object).
 *
 * @usageNotes
 * `string | get$:{args}?:{headers}?`
 * #### With args
 * ```javascript
 * 'api' | get$:{a:1,b:2} // actual request: api?a=1&b=2
 * 'api' | get$:{a:1,b:2}:{Authorization:xxx} // actual request: api?a=1&b=2 with header {Authorization: xxx}
 * ```
 * #### Example
 * ```html
 * <ng-container *ngIf="'https://jsonplaceholder.typicode.com/todos' | get$ | async as result">
 *   <ng-container *ngIf="result.valid">
 *     <p *ngFor="let item of result.data">
 *       {{item.title}}
 *     </p>
 *   </ng-container>
 * </ng-container>
 * ```
 * @see Result
 */
@Pipe({
  name: 'get$'
})
export class AjaxGetJsonPipe implements PipeTransform {
  constructor(private http: HttpClient) {
  }

  /**
   * Simple http GET request pipe.
   * @param url url
   * @param args request arguments
   * @param headers http headers
   */
  transform(url: string, args: { [index: string]: any } = {}, headers: {
    [index: string]: string
  } = {}): Observable<ResultWrapper> {
    const getUrl = Object.keys(args).length > 0 ? `${url}?${new URLSearchParams(args)}` : url;
    return this.http.get(getUrl, {headers: headers}).pipe(
      map(data => new ResultWrapper(true, data, 'requested!')),
      catchError(err => {
        console.error(err);
        return of(new ResultWrapper(false, null, err.message));
      })
    );
  }
}
