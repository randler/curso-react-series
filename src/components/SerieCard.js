//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions
} from 'react-native';

// create a component
const SerieCard = ({ serie }) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} >
                <Image
                    style={styles.imageItem} 
                    source={{uri: serie.img}}
                    resizeMode="cover" />
                <View style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}>{`${serie.id} - ${serie.title}`}</Text>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        height: Dimensions.get('window').width / 2,
    },
    line: {
        marginHorizontal: 5,
        marginBottom: 5,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 1,
        flex: 1
    },
    imageItem: {
        flex: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginBottom: 50,
    },
    cardTitleWrapper: {
        backgroundColor: '#FFFFFF',
        height: 50,
        paddingLeft: 5,
        paddingTop: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,

        position: 'absolute',
        bottom: 0,
        opacity: .8,
        width: '100%'
    },
    cardTitle: {
        flex: 2,
        fontSize: 15,
        fontWeight: 'bold',
    }
});

//make this component available to the app
export default SerieCard;
