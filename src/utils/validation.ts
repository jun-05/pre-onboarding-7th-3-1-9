const BLANKG_REG = /\s/g;

export function isBlankVal(value: string) {
  return value.replace(BLANKG_REG, '').length === 0;
}
