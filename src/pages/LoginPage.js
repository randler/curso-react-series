import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';


export default class LoginPage extends React.Component {
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
                   <View style={styles.labelView}>
                        <Text style={styles.label} > Email </Text>
                        <Text style={styles.label} > Senha </Text>
                   </View>
                </View>
                <TouchableOpacity onPress={() => console.log('clicou!')} style={styles.cardFooter} >
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
        height: 150,
        flex: 9,
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
        marginBottom: 100,
        alignItems: 'center',
        flex: 1,
        elevation: 1,
    },
    cardImage: {
        zIndex: 1,
        elevation: 1,
        marginTop: 80,
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
    labelView: {
        marginTop: 30,
    },
    label: {
        marginTop: 10,
    }
});