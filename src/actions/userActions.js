const USER_LOGIN = 'USER_LOGIN';
const userLogin = user => ({
    type: USER_LOGIN,
    user
});
const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT
});


export const tryLogin = ({email, password}) => dispatch => {
    firebase.auth()
        .signInWithEmailAndPassword( mail, password )
        .then( loginUserSucess )
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
                        this.setState({isLoading: true});
                        firebase.auth()
                            .createUserWithEmailAndPassword(mail, password)
                            .then( loginUserSucess )
                            .catch( loginUserFailed )
                            .then(() =>  this.setState({isLoading: false}));
                            
                    }
                }],
                { cancelable: false }
            )
            return ;
        } 
        loginUserFailed(error);              
    })
    .then(() => this.setState({isLoading: false}));
}