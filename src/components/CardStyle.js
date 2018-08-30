import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const CardStyle = props => {

    const { children, imagem } = props;
    return (
        <View>
            <View style={styles.cardImage} >
                <Image
                    style={styles.image} 
                    source={imagem === 'login' ?
                                require('../assets/img/lock.png') : 
                                imagem === 'new-serie' ?
                                require('../assets/img/new-serie.png') :  
                                require('../assets/img/register.png')} />
            </View>
            <View style={styles.cardLogin} >
                { children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardLogin: {
        marginTop: -40,
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 5,
        paddingTop: 25,
        borderWidth: 1,
        borderColor: '#C1C1C1',
        elevation: 1,
        zIndex: 0,
    },
    cardImage: {
        zIndex: 2,
        elevation: 1,
        marginTop: 20,
    },
    image: {
        width: 80,
        height: 80,
        zIndex: 2,
        alignSelf: 'center',
    },
});

export default CardStyle;