import {Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

/**
 * json$ pipe result wrapper.
 */
export class Result {
  success: boolean = false;
  data?: any | any[];
  message?: string;

  /**
   * if ajax request result is empty or null returns false, else returns true.
   */
  get isNotEmpty(): boolean {
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
 * `Syntax: 'your api' | json$:{args}?:{headers}?`
 *
 * ### Notice:
 * The result is a wrapper(Observable<Result>) of your result from the api.
 *
 * Result: `{success: boolean, data?: any | any[], message: string, isNotEmpty: boolean}`
 *
 * Result#data: your actual result.
 *
 * Result#isNotEmpty: `result.data` is not `null`, `undefined`, `length > 0`(array) and `{field:...}`(object).
 *
 * @usageNotes
 * #### With args
 * ```javascript
 * 'api' | json$:{a:1,b:2} // actual request: api?a=1&b=2
 * 'api' | json$:{a:1,b:2}:{Authorization:xxx} // actual request: api?a=1&b=2 with header {Authorization: xxx}
 * ```
 * #### Example
 * ```html
 * <ng-container *ngIf="'https://jsonplaceholder.typicode.com/todos' | json$ | async as result">
 *   <ng-container *ngIf="result.isNotEmpty">
 *     <p *ngFor="let item of result.data">
 *       {{item.title}}
 *     </p>
 *   </ng-container>
 * </ng-container>
 * ```
 * @see Result
 */
@Pipe({
  name: 'json$'
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
  } = {}): Observable<Result> {
    const getUrl = Object.keys(args).length > 0 ? `${url}?${new URLSearchParams(args)}` : url;
    return this.http.get(getUrl, {headers: headers}).pipe(
      map(data => {
        const res = new Result();
        res.success = true;
        res.data = data;
        res.message = 'requested!'
        return res;
      }),
      catchError(err => {
        const res = new Result();
        res.message = err.message;
        res.success = false;
        console.error(err);
        return of(res);
      })
    );
  }
}
