export const LOGIN = 'LOGIN';

export const login = (username, password) => {
    console.log('action firing');
    return (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: {
                username: username,
                password: password
            }
        });
    };
};