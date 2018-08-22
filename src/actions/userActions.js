import firebase from 'firebase';

const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});
const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT
});


export const tryLogin = ({email, password}) => dispatch => {
    firebase.auth()
        .signInWithEmailAndPassword( email, password )
        .then( user => {
            const action = userLoginSuccess(user);
            dispatch(action);
        })
        .catch(error => {

            if (error.code === 'auth/user-not-found') {
                Alert.alert(
                    'Usuário não encontrado',
                    'Deseja se cadastrar com essas informações',
                    [{
                        text: 'Não',
                        onPress: () => {},
                        style: 'cancel' //IOS
                    }, {
                        text: 'Sim',
                        onPress: () => {
                            firebase.auth()
                                .createUserWithEmailAndPassword(email, password)
                                .then( loginUserSucess )
                                .catch( loginUserFailed )
                                
                        }
                    }],
                    { cancelable: false }
                )
                return ;
            } 
            loginUserFailed(error);              
        });
}