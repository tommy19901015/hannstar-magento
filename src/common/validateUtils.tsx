export const patterns = {
    username: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[a-zA-Z\d]{8,}$/i,
  };

export function validate(val: number | string, regex:RegExp) {
    const valid = val.toString().replace(/\s*/g,"");
    return regex.test(valid);;
}

export function isEmpty(val: number | string) :boolean{
    const valid = val.toString().replace(/\s*/g,"");
    return valid.length === 0 ;
}

export function compare(prev: number | string, curr: number | string) :boolean{
    const prevVal = prev.toString().replace(/\s*/g,"");
    const currVal= curr.toString().replace(/\s*/g,"");
    return !isEmpty(prevVal) && !isEmpty(currVal) && prevVal === currVal;
}