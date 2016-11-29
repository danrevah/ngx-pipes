
export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isNumber(value: any) {
  return typeof value === 'number';
}

export function isNumberFinite(value: any) {
  return isNumber(value) && isFinite(value);
}

export function extractProperty(obj: Object, map: string) {
  const keys = map.split('.');
  const key = keys.shift();
  let prop = obj[key];

  for (let key of keys) {
    if (isUndefined(prop[key])) {
      return prop[key];
    }
    prop = prop[key];
  }

  return prop;
}
