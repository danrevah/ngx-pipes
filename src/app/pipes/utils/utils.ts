
export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isNumber(value: any) {
  return typeof value === 'number';
}

export function isNumberFinite(value: any) {
  return isNumber(value) && isFinite(value);
}

export function extractProperty(obj: any, map: string) {
  const keys = map.split('.');
  const key = keys.shift();

  return keys.length > 0 && !isUndefined(obj[key])
    ? extractProperty(obj[key], keys.join('.'))
    : obj[key];
}
