export const patterns = {
    username: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[a-zA-Z\d]{8,}$/i,
};

export function validatePassword(val: string) {
    var
        counter = 0,
        passwordMinLength = 8,
        passwordMinCharacterSets = 4,
        pass = val.trim(),
        result = pass.length >= passwordMinLength;

    if (result === false) {
        return result;
    }

    if (pass.match(/\d+/)) {
        counter++;
    }

    if (pass.match(/[a-z]+/)) {
        counter++;
    }

    if (pass.match(/[A-Z]+/)) {
        counter++;
    }

    if (pass.match(/[^a-zA-Z0-9]+/)) {
        counter++;
    }

    if (counter < passwordMinCharacterSets) {
        result = false;
    }

    return result;
}

export function validate(val: number | string, regex: RegExp) {
    const valid = val.toString().replace(/\s*/g, "");
    return regex.test(valid);
}

export function isNotEmpty(val: number | string): boolean {
    const valid = val.toString().replace(/\s*/g, "");
    return valid.length !== 0;
}

export function compare(prev: number | string, curr: number | string): boolean {
    const prevVal = prev.toString().replace(/\s*/g, "");
    const currVal = curr.toString().replace(/\s*/g, "");
    return isNotEmpty(prevVal) && isNotEmpty(currVal) && prevVal === currVal;
}
