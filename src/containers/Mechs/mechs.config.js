
export const initialStateMechs = {
    name: {
        label: 'Name',
        value: '',
        validation: {
            required: true,
            minLength: 4,
            maxLength: 64,
        },
        validity: {
            isValid: false,
            message: '',
        },
        touched: false,
    },
    abbr: {
        label: 'Abbr',
        value: '',
        validation: {
            required: true,
            minLength: 1,
            maxLength: 4,
        },
        validity: {
            isValid: false,
            message: '',
        },
        touched: false,
    },
    weight: {
        label: 'Weight',
        value: '',
        validation: {
            required: true,
            minLength: 2,
            maxLength: 3,
        },
        validity: {
            isValid: false,
            message: '',
        },
        touched: false,
    }
};
