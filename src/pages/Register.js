import React from 'react';
import {
    Text, 
    View, 
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    StyleSheet 
} from 'react-native';

import FormRow from '../components/FormRow'
import CardStyle from '../components/CardStyle';

import firebase from 'firebase';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }
    
    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    tryRegister() {
        this.setState({isLoading: true, message: ''});
        const { mail, password } = this.state;

        if(!mail || !password) {
            this.setState({
                message: 'Digite os dados',
                isLoading: false
            });
        } else {
            const registerUserSuccess = user => {
                this.setState({
                    mail: '',
                    password: '',
                    message: ''
                });
                this.props.navigation.navigate('Main');
            }

            const registerUserFailed = error => {
                this.setState({
                    message: this.getMessageByErrorCode(error.code)
                });

            firebase.auth()
                .createUserWithEmailAndPassword(mail, password)
                .then( registerUserSuccess )
                .catch( registerUserFailed )
                .then( () => this.setState({isLoading: false}));

            }
        }
    }

    getMessageByErrorCode(errorCode) {
        switch(errorCode) {
            case 'auth/email-already-in-use':
                return 'E-mail já está em uso';
            case 'auth/invalid-email':
                return 'E-mail inválido';
            case 'auth/operation-not-allowed':
                return 'Operação não permitida';
            case 'auth/weak-password':
                return 'Senha fraca';
        }
    }

    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator color="#FFFFFF" style={ styles.buttonLogin } />
        return (
            <TouchableOpacity 
                style={ styles.buttonLogin }
                onPress={ ()=> this.tryRegister() }
                underlayColor="#FFF" >
                <Text style={styles.buttonLoginText} >Cadastrar</Text>
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


    render(){
        return(
            <View style={styles.container} >
                <CardStyle imagem="register">
                        <Text style={styles.textItem} > Cadastrar </Text>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1
    },
    textItem: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    inputLogin: {
        padding: 10
    },
    buttonLogin: {
        backgroundColor: '#00aeef',
        marginHorizontal: 50,
        marginTop: 5,
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