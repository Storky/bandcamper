import { createMuiTheme } from '@material-ui/core/styles';

const $siteBg = 'white';

const theme = createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            root: {
                border: '1px solid #D8D7D5',
                '& input::placeholder': {},
                '&$focused': {},
                '&.Mui-error': {}
            },
            adornedEnd: {
                paddingRight: '5px',
            },
            input: {},
        },
        MuiInputLabel: {
            root: {},
            outlined: {
                background: $siteBg,
                boxShadow: `-5px 0 0 0 ${$siteBg}, 5px 0 0 0 ${$siteBg}`,
                zIndex: 2,
                '&.MuiInputLabel-shrink': {},
                '&.Mui-error': {},
            },
        },
    },
});

export default theme;
