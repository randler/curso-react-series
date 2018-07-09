import React from 'react';
import {
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    TextInput, 
    StyleSheet 
} from 'react-native';

import FormRow from '../components/FormRow'

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            mail: '',
            password: '' 
        }
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    } 
    tryLogin() {
        console.log(this.state);
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
                                value={this.state.value}
                                onChangeText={value => this.onChangeHandler('password', value)}
                                style={styles.inputLogin}
                                secureTextEntry
                                placeholder="*********" />
                        </FormRow>

                        <TouchableOpacity 
                            style={ styles.buttonLogin }
                            onPress={ ()=> this.tryLogin() }
                            underlayColor="#FFF" >
                            <Text style={styles.buttonLoginText} >Entrar</Text>
                        </TouchableOpacity>
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
        marginTop: 30,
        padding: 10,
        borderRadius: 5,
    },
    buttonLoginText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    }
});