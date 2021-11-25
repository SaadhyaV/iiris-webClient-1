const DEFAULT_PASSWORD_RULES  = {
    min: 8,
    max: 30,
  //   lowerCase: 1,
  //   upperCase: 1,
    alpha: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3,
  };

class ComplexityError
{
    constructor(failures)
    {
        this.failures = failures;
    }
    toString()
    {
        if(this.failures && this.failures.length > 0)
        {
            return this.failures.join('.\n')
        }
        return "";
    }
}

export default class PasswordComplexityEvaluator 
{
    constructor(passwordRules = DEFAULT_PASSWORD_RULES)
    {
        this.passwordRules = passwordRules || DEFAULT_PASSWORD_RULES;
    }

    evaluate (password)
    {
        const failures = []
        const $password = `${password}`;
        const {min, max, numeric, symbol, alpha} = this.passwordRules;
        if(min      && $password.length < min) { failures.push(`Password should be at least ${min} characters long`);}
        if(max      && $password.length > max) { failures.push(`Password should be at most ${max} characters long`);}
        if(numeric  && $password.replace(/\D/g,"").length < numeric) { failures.push(`Password should have at least ${numeric} digit(s) in it`);}
        if(alpha    && $password.replace(/((\d)*|(~)*(`)*|(!)*|(@)*|(#)*|(\$)*|(%)*|(\^)*|(&)*|(\*)*|(\()*|(\))*|(-)*|(_)*|(\+)*|(=)*)*/g,"").length < alpha) { failures.push(`Password should have at least ${numeric} letter(s) in it`);}
        if(symbol   && $password.replace(/(\d)*([a-zA-Z])*/g,"").length < symbol) { failures.push(`Password should have at least ${symbol} special character(s) in it`);}
        // if(min && $password.length < min) { failures.push(`Password should be at least ${min} characters long`);}
        // if(min && $password.length < min) { failures.push(`Password should be at least ${min} characters long`);}
        const success = failures.length === 0;
        const result = { success };
        if(!success) { result.error = new ComplexityError(failures)}
        return result;
    }
}