import {AjaxGetJsonPipe} from './ajax-get-json';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('AjaxGetJsonPipe', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let pipe: AjaxGetJsonPipe;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    pipe = new AjaxGetJsonPipe(httpClientSpy);
  });

  it('should return expected result property id value.', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of({
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    }));

    pipe.transform('https://jsonplaceholder.typicode.com/todos/11')
      .subscribe({
        next: result => {
          expect(result.data.id)
            .withContext('expected id')
            .toEqual(11);
          done();
        },
        error: done.fail
      });
  });
});
