

export function isUndefined(value: any) {
  return typeof value === 'undefined';
}

export function isFunction(value: any) {
  return typeof value === 'function';
}

export function isNumber(value: any) {
  return typeof value === 'number';
}

export function isString(value: any) {
  return typeof value === 'string';
}

export function isObject(value: any) {
  return value !== null && typeof value === 'object';
}

export function isNumberFinite(value: any) {
  return isNumber(value) && isFinite(value);
}

export function extractDeepPropertyByMapKey(obj: any, map: string): any {
  const keys = map.split('.');
  const key = keys.shift();

  return keys.reduce((prop: any, key: string) => {
    return !isUndefined(prop) && !isUndefined(prop[key])
      ? prop[key]
      : undefined;
  }, obj[key]);
}
