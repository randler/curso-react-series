import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const LongText = ({label = '', content = '-'}) => {
    return (
        <View style={styles.line}>
            <Text style={[
                styles.cell, 
                styles.label,
                ]}>{ label }</Text>
            <Text style={[styles.cell, styles.content]}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        paddingVertical: 3,
        marginHorizontal: 5,
    },
    content: {
        flex: 4,
        textAlign: 'justify', // IOS
    },
    cell: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 5,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
        textDecorationLine: 'underline',
        paddingBottom: 5,
    }
});


export default Line;