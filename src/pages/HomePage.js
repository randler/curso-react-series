import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


export default class HomePage extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.cell} >
                    <View style={styles.line} >
                        <Image
                            style={styles.imageItem} 
                            source={{uri: 'https://udemy-images.udemy.com/course/240x135/1566920_5927_3.jpg'}} />
                        <Text style={styles.textItem} >Login</Text>
                    </View> 
                    <View style={styles.line} >
                        <Image
                            style={styles.imageItem} 
                            source={{uri: 'https://udemy-images.udemy.com/course/240x135/1566920_5927_3.jpg'}} />
                        <Text style={styles.textItem} >Login</Text>
                    </View>
                </View> 

                <View style={styles.cell} >
                    <View style={styles.line} >
                        <Image
                            style={styles.imageItem} 
                            source={{uri: 'https://udemy-images.udemy.com/course/240x135/1566920_5927_3.jpg'}} />
                        <Text style={styles.textItem} >Login</Text>
                    </View> 
                    <View style={styles.line} >
                        <Image
                            style={styles.imageItem} 
                            source={{uri: 'https://udemy-images.udemy.com/course/240x135/1566920_5927_3.jpg'}} />
                        <Text style={styles.textItem} >Login</Text>
                    </View>
                </View> 
                
            </View>
        );
    }
}

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