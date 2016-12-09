
export default class GeneralHelper {
  static isUndefined(value: any) {
    return typeof value === 'undefined';
  }

  static isFunction(value: any) {
    return typeof value === 'function';
  }

  static isNumber(value: any) {
    return typeof value === 'number';
  }

  static isString(value: any) {
    return typeof value === 'string';
  }

  static isObject(value: any) {
    return value !== null && typeof value === 'object';
  }

  static isNumberFinite(value: any) {
    return GeneralHelper.isNumber(value) && isFinite(value);
  }

  static extractDeepPropertyByMapKey(obj: Object, map: string) {
    const keys = map.split('.');
    const key = keys.shift();
    let prop = obj[key];

    for (let key of keys) {
      if (GeneralHelper.isUndefined(prop[key])) {
        return prop[key];
      }
      prop = prop[key];
    }

    return prop;
  }
}
