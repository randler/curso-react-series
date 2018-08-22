import React from 'react';
import {Text, View, Image, FlatList, StyleSheet} from 'react-native';

import SerieCard from '../components/SerieCard';

import series from '../../series.json';

const SeriesPage = props => (
    <View >
        <FlatList
            data={series}
            renderItem={({item, index }) => (
            <SerieCard 
                serie={item}
                isFirstColumn={index%2===0} />
        )}
        keyExtractor={item => item.id} 
        numColumns={2}
        ListHeaderComponent={props => (<View style={styles.header} />)}
        ListHeaderComponent={props => (<View style={styles.footer} />)}
        /> 
    </View>    
)

const styles = StyleSheet.create({
    header: {
        marginTop: 5,
    },
    footer: {
        marginBottom: 5,
    }
});

export default SeriesPage;