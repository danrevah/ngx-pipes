
export function isNumber(value: any) {
  return typeof value === 'number';
}

export function isNumberFinite(value: any) {
  return isNumber(value) && isFinite(value);
}
