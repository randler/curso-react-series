import React from 'react';
import {Text, View, Image, FlatList, StyleSheet} from 'react-native';

import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';

import series from '../../series.json';

const SeriesPage = props => (
    <View >
        <FlatList
            data={[...series, { isLast: true }]}
            renderItem={({item, index }) => (
            item.isLast ?
                <AddSerieCard
                    isFirstColumn={index%2===0} 
                /> :
                <SerieCard 
                    serie={item}
                    isFirstColumn={index%2===0} 
                    onNavigate={() => props.navigation.navigate('SerieDetail', { serie: item })}
                />
        )}
        keyExtractor={item => item.id} 
        numColumns={2}
        ListHeaderComponent={props => (<View style={styles.header} />)}
        ListFooterComponent={props => (<View style={styles.footer} />)}
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