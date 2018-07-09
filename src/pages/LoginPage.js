import React from 'react';
import {
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    ActivityIndicator,
    TextInput, 
    Alert,
    StyleSheet 
} from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow'

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyA_mDbS7miX7bw7hXjowDP2IVBC2PrCd34",
            authDomain: "series-a5fb2.firebaseapp.com",
            databaseURL: "https://series-a5fb2.firebaseio.com",
            projectId: "series-a5fb2",
            storageBucket: "series-a5fb2.appspot.com",
            messagingSenderId: "384979480160"
          };
        firebase.initializeApp(config);
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    } 
    tryLogin() {
        this.setState({isLoading: true, message: ''});
        const { mail, password } = this.state;

        const loginUserSucess = user => {
            this.setState({
                mail: '',
                password: '',
                message: ''
            });
            this.props.navigation.navigate('Main');
        }

        const loginUserFailed = error => {
            this.setState({
                message: this.getMessageByErrorCode(error.code)
            });
        }

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

    getMessageByErrorCode(errorCode) {
        switch(errorCode) {
            case 'auth/invalid-email':
                return 'E-mail inválido';
            case 'auth/user-disabled':
                return 'Usuário não permitido';
            case 'auth/wrong-password':
                return 'Senha incorreta';
        }
    }

    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator color="#FFFFFF" style={ styles.buttonLogin } />
        return (
            <TouchableOpacity 
                style={ styles.buttonLogin }
                onPress={ ()=> this.tryLogin() }
                underlayColor="#FFF" >
                <Text style={styles.buttonLoginText} >Entrar</Text>
            </TouchableOpacity>
        );
    }
    renderMessage() {
        const { message } = this.state;

        if(!message)
            return null;
        
        return (
            <View style={styles.errorDiv}>
                <Text style={styles.errorText}>{ message }</Text>
            </View>
        );

    }

    render() {
        return (
            <View style={styles.container} >

                <View style={styles.cardImage} >
                   <Image
                        style={styles.imageLock} 
                        source={require('../assets/img/lock.png')} />
                </View>
                <View style={styles.cardLogin} >
                        <Text style={styles.textItem} > Login </Text>
                        <FormRow first>
                            <TextInput
                                value={this.state.mail}
                                onChangeText={value => this.onChangeHandler('mail', value)}
                                style={styles.inputLogin}
                                placeholder="user@mail.com" />
                        </FormRow>
                        <FormRow last>
                            <TextInput
                                value={this.state.password}
                                onChangeText={value => this.onChangeHandler('password', value)}
                                style={styles.inputLogin}
                                secureTextEntry
                                placeholder="*********" />
                        </FormRow>
                        { this.renderMessage() }
                        { this.renderButton() }
                       
                </View>
                <TouchableOpacity onPress={() => console.log('cadastrar!')} style={styles.cardFooter} >
                    <Text style={styles.textFooter} >Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1
    },
    cardLogin: {
        marginTop: -40,
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: '#C1C1C1',
        elevation: 1,
        flex: 10,
        zIndex: 0,
    },
    cardFooter: {
        backgroundColor: '#F2F2F2',
        padding: 10,
        marginHorizontal: 30,
        borderWidth: 1,
        borderColor: '#C1C1C1',
        borderTopColor: '#E2E2E2',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 60,
        alignItems: 'center',
        flex: 1,
        elevation: 1,
    },
    cardImage: {
        zIndex: 2,
        elevation: 1,
        marginTop: 20,
    },
    imageLock: {
        width: 80,
        height: 80,
        zIndex: 2,
        alignSelf: 'center',
    },
    textItem: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    textFooter: {
        fontSize: 16,
        color: '#919191',
        alignSelf: 'center',
    },
    inputLogin: {
        padding: 10
    },
    buttonLogin: {
        backgroundColor: '#00aeef',
        marginHorizontal: 50,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
    },
    buttonLoginText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    },
    errorDiv: {
        marginVertical: 5,
    },
    errorText: {
        alignSelf: 'center',
        color: '#FF0000',
        fontSize: 18,
        fontWeight: 'bold'
    }
});