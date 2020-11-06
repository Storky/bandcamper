export const checkValidity = (value, rules) => {
    //  NOTE: saved old flow to show only 1 last message, but may be implemented an ability to show all error messages

    //todo review

    const validationResult = Object.entries(rules).map(entry => {
        const rule = {};
        rule.title = entry[0];
        rule.options = entry[1];

        let pattern = null;
        let isValid = false;
        let msg = '';

        switch (rule.title) {
            case 'required':
                if (typeof value === 'number') {
                    isValid = value.toString().trim() !== '';
                } else {
                    isValid = value.trim() !== '';
                }
                msg = !isValid ? 'Field is required.' : '';
                return {rule: rule.title, isValid: isValid, message: msg };

            case 'minLength':
                isValid = value.length >= rule.options;
                msg = !isValid ? `Minimum ${rule.options} characters required.` : '';
                return {rule: rule.title, isValid: isValid, message: msg };

            case 'maxLength':
                isValid = value.length <= rule.options;
                msg = !isValid ? `Maximum ${rule.options} characters required.` : '';
                return {rule: rule.title, isValid: isValid, message: msg };

            case 'isEmail':
                pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
                isValid = pattern.test(value);
                msg = !isValid ? `Invalid E-mail format` : '';
                return {rule: rule.title, isValid: isValid, message: msg };

            case 'isNumeric':
                pattern = /^[+-]?\d+(\.\d+)?$/;
                isValid = pattern.test(value);
                msg = !isValid ? `Numbers only required.` : '';
                return {rule: rule.title, isValid: isValid, message: msg };

            case 'mustStartWithLetter':
                isValid = /^[~a-zA-Z]/.test(value);
                msg = !isValid ? `Should start with a letter.` : '';
                return {rule: rule.title, isValid: isValid, message: msg };

            case 'mustEndWithLetterOrDigit':
                isValid = /[a-zA-Z0-9]$/.test(value);
                msg = !isValid ? `Should end with a letter or digit.` : '';
                return {rule: rule.title, isValid: isValid, message: msg };

            case 'onlyOneDashInARow':
                isValid = /[a-zA-Z0-9]$/.test(value);
                msg = !isValid ? `Should have only one dash in a row.` : '';
                return {rule: rule.title, isValid: isValid, message: msg };

            default:
                return {rule: null, isValid: true, message: '' };
        }

    });

    const errors = validationResult.filter(item => item.isValid === false);

    return (errors.length === 0)?
        {rule: null, isValid: true, message: '' }
        : errors.slice()[0];
};

export const inputRejected = (value, rules) => {

    const rejectionResult = Object.entries(rules).map(entry => {
        const rule = {};
        rule.title = entry[0];

        let rejected = false;
        let pattern, ex;

        switch (rule.title) {
            case 'onlyLatinDashDigits':
                pattern = /[a-zA-Z0-9-]+/;
                ex = pattern.exec(value);
                rejected = !!(value !== '' && (ex === null || ex[0] !== ex['input']));
                return {rule: rule.title, rejected };

            case 'onlyLatinDashDigitsPointComma':
                pattern = /[a-zA-Z0-9.,-]+/;
                ex = pattern.exec(value);
                rejected = !!(value !== '' && (ex === null || ex[0] !== ex['input']));
                return {rule: rule.title, rejected };

            case 'noDoublePoint':
                pattern = /[.]{2}/g;
                ex = pattern.exec(value);
                rejected = (ex !== null);

                return {rule: rule.title, rejected: rejected };

            case 'noFirstPoint':
                pattern = /^[.]/g;
                ex = pattern.exec(value);
                rejected = (ex !== null);

                return {rule: rule.title, rejected: rejected };

            default:
                return {rule: rule.title, rejected };
        }

    });

    const isRejected = !!rejectionResult.find(item => !!item.rejected);

    return isRejected;
};
