import axios from 'axios';

const API_KEY = 'AIzaSyBQYw7y-iGude_LCudF2oiGY2OD2XTV7Yw';

export const firebaseAPI = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    // withCredentials: true,
    headers: { 'content-type': ' application/json' },
});

export const test = (token) => {
    return firebaseAPI.get('https://dream-react-cra.firebaseio.com/test.json?auth=' + token)
};

export const mechsPut = (token, data) => {
    console.log(data);
    return firebaseAPI.put('https://dream-react-cra.firebaseio.com/mechs.json?auth=' + token, {
        vtr: {
            name: 'Victor',
            abbr: 'vtr',
            weight: '80',
        },
        bj: {
            name: 'Blackjack',
            abbr: 'bj',
            weight: '45',
        },
        cplt: {
            name: 'Catapult',
            abbr: 'cplt',
            weight: '65',
        },
    } )
};

export const testPost = (token, data = {}) => {
    return firebaseAPI.put('https://dream-react-cra.firebaseio.com/test.json?auth=' + token, [
        {name: 'qqqq'},
        {name: 'wwww'},
        {name: 'eeee'},
    ] )
};


