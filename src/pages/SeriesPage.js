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
                isFirstColumn={index%2==0} />
        )}
        keyExtractor={item => item.id} 
        numColumns={2}
        /> 
    </View>    
)

const styles = StyleSheet.create({});

export default SeriesPage;