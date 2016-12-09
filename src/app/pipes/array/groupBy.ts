import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
  groupBy = (list: any[], discriminator: Function | string) => {
    let map = list.reduce((acc, payload, i) => {
      let key = discriminator instanceof Function ? discriminator(payload) : payload[ discriminator ];
      return Object.assign({}, acc, {
        [ key ]: acc[ key ] instanceof Array ? acc[ key ].concat([ payload ]) : [ payload ]
      });
    }, {});
    return Object.keys(map).map((key: string) => [ key, map[ key ] ]);
  }
  transform(arr: any, ...args: any[]): any {
    if (!Array.isArray(arr)) {
      return arr;
    }
    return this.groupBy(arr, args[ 0 ]);
  }

}