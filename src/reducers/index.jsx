import { LOGIN } from './actions';

console.log(LOGIN);
const initialState = {
    users: [
        { username: 'Pesho', pass: 'asdasd' },
        { username: 'Mitko', pass: 'asdasd2' },
        { username: 'Gosho', pass: 'asdasd3' }
    ],
    isLoggedIn: false

};

const rootReducer = (state = initialState, action) => {
    console.log(action, state )
    switch (action.type) {
        case LOGIN:
            const username = action.payload.username;
            const password = action.payload.password;
            let isLogged = false;
            console.log('asdasd');
            state.users.forEach(user => {
                console.log(user)
                if (user.username === username && user.password === password) {
                    isLogged = true;
                    console.log('uceli');
                    return { ...state, isLogged: isLogged }
                } else {
                    return {
                        ...state,
                        isLogged: false
                    };
                }
            });
        default:
            return state;
    }

};

export default rootReducer;