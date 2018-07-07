import React from 'react';
import { View, StyleSheet } from 'react-native';


const FormRow = props => {
    const { children } = props
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});

export default FormRow;