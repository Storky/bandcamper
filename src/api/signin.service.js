import { firebaseAPI } from './api';

export const login = (email, password) => {
    return firebaseAPI.post('', {
        email,
        password,
        returnSecureToken: true,
    })
};

// export const user = (token) => jwtApi(token).get('/user');
