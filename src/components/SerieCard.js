//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const SerieCard = ({ serie }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cell} >
                <View style={styles.line} >
                    <Image
                        style={styles.imageItem} 
                        source={{uri: serie.img}} />
                    <Text>{`${serie.id} - ${serie.title}`}</Text>
                </View>
            </View> 
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1
    },
    cell: {
        flexDirection: 'row',
    },
    line: {

        marginHorizontal: 5,
        marginBottom: 5,
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 5,
        elevation: 1,
        height: 150,
        flex: 1
    },
    imageItem: {
        flex: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginBottom: 5,
    },
    textItem: {
        flex: 2,
        fontWeight: 'bold',
    }
});

//make this component available to the app
export default SerieCard;
