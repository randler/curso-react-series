//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions,
    TouchableOpacity
} from 'react-native';

// create a component
const AddSerieCard = ({ serie, isFirstColumn, onNavigate }) => {
    return (
        <TouchableOpacity 
            onPress={onNavigate}
            style={[
                styles.container, 
                isFirstColumn ? styles.firstColumn : styles.lastColumn
            ]}>
            <View style={styles.card} >
                <Image
                    style={styles.imageItem} 
                    source={require('../../resources/img/plus.png')} />
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        //Solução 1
        width: '50%',
        padding: 5,

        //Solução 2
        //flex: .5,
        
        height: Dimensions.get('window').width / 2,
    },
    firstColumn: {
        paddingRight: 2.5,
    },
    lastColumn: {
        paddingLeft: 2.5,
    },
    card: {
        //Solução
        //margin: 5,
        marginHorizontal: 5,
        marginBottom: 5,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 1,
        flex: 1
    },
    imageItem: {
        width: '100%',
        flex: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
});

//make this component available to the app
export default AddSerieCard;
