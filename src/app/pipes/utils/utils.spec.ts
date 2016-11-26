import {extractProperty} from './utils';

describe('Utils Tests', () => {

  it('should extract properties properly', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      },
      f: {
        g: 4,
        h: 5,
        i: {
          j: {
            k: {
              l: 6
            }
          }
        }
      }
    };

    expect(extractProperty(obj, 'a')).toEqual(1);
    expect(extractProperty(obj, 'b.c')).toEqual(2);
    expect(extractProperty(obj, 'b.d.e')).toEqual(3);
    expect(extractProperty(obj, 'f.g')).toEqual(4);
    expect(extractProperty(obj, 'f.i.j.k.l')).toEqual(6);
    expect(extractProperty(obj, 'f.i.j.k.l.')).toEqual(undefined);
  });
});
