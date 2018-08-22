import React from 'react';
import {
    Text, 
    View, 
    TouchableOpacity,
    ActivityIndicator,
    TextInput, 
    Alert,
    StyleSheet 
} from 'react-native';
import firebase from 'firebase';

import { connect } from 'react-redux';

import { tryLogin } from '../actions';

import FormRow from '../components/FormRow'
import CardStyle from '../components/CardStyle';

class LoginPage extends React.Component {

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
        const { mail: email, password } = this.state;

        this.props.tryLogin({email, password})
            .then( () =>{
                this.setState({message: 'Sucesso!'});
                this.props.navigation.replace('Main');
            }).catch( error =>{
                
            });
        
    } 

    getMessageByErrorCode(errorCode) {
        switch(errorCode) {
            case 'auth/invalid-email':
                return 'E-mail inválido';
            case 'auth/user-disabled':
                return 'Usuário não permitido';
            case 'auth/wrong-password':
                return 'Senha incorreta';
            default:
                return errorCode;
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
                <CardStyle imagem="login">
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
                       
                </CardStyle>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.cardFooter} >
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
        elevation: 1,
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

export default connect(
    null, 
    { tryLogin }
)(LoginPage);