export const patterns = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  number: /^\d+$/,
};

export function isNotEmpty(val: number | string): boolean {
  return val ? val.toString().length !== 0 : false;
}

export function validatePassword(val: string) {
  let counter = 0;
  const passwordMinLength = 8;
  const passwordMinCharacterSets = 4;
  let result = false;
  if (isNotEmpty(val)) {
    const pass = val.trim();
    result = pass.length >= passwordMinLength;
    if (result === false) return result;
    if (pass.match(/\d+/)) counter++;
    if (pass.match(/[a-z]+/)) counter++;
    if (pass.match(/[A-Z]+/)) counter++;
    if (pass.match(/[^a-zA-Z0-9]+/)) counter++;
    if (counter < passwordMinCharacterSets) result = false;
  }
  return result;
}

export function validate(val: number | string, regex: RegExp) {
  return isNotEmpty(val)
    ? regex.test(val.toString().replace(/\s*/g, ""))
    : false;
}

export function compare(prev: number | string, curr: number | string): boolean {
  if (prev || curr) {
    const prevVal = prev.toString().replace(/\s*/g, "");
    const currVal = curr.toString().replace(/\s*/g, "");
    return isNotEmpty(prevVal) && isNotEmpty(currVal) && prevVal === currVal;
  }
  return false;
}
