//import liraries
import React, { Component } from 'react';
import { 
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';

// create a component
class SerieDetailPage extends Component {
    render() {
        const serie = {
            "id": 1,
            "title": "Black Mirror",
            "gender": "Ficção Científica",
            "rate": 100,
            "img":
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
            "description":
                "Black Mirror é uma série de televisão britânica antológica de ficção científica criada por Charlie Brooker e centrada em temas obscuros e satíricos que examinam a sociedade moderna, particularmente a respeito das consequências imprevistas das novas tecnologias. Os episódios são trabalhos autônomos, que geralmente se passam em um presente alternativo ou em um futuro próximo."
        }
        //const { serie }= this.props.navigation.state.params;
        return (
            <ScrollView style={styles.details}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: serie.img
                    }}>
                </Image>
                <View style={styles.description}>
                    <Line label={'Titulo:'} content={serie.title}/>
                    <Line label={'Genero:'} content={serie.gender}/>
                    <Line label={'Nota:'} content={serie.rate}/>
                    <LongText label={'Descrição:'} content={serie.description}/>
                </View>
                <TouchableOpacity 
                    style={styles.buttonEpisodios}>
                    <Text style={styles.textButton}>Episódios</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    image:{
        alignSelf: 'center',
        aspectRatio: 1,
        margin: 5,
        height: Dimensions.get('window').height / 1.8,
        borderRadius: 5,
    },
    details: {
        flex: 1
    },
    description: {
        borderColor: '#2e333d',
        borderRadius: 5,
        marginHorizontal: 10,
        backgroundColor: '#FFFFFF',

    },
    buttonEpisodios: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: Dimensions.get('window').width - 10,
        margin: 5,
        borderRadius: 5,
        borderColor: '#2e333d',
        borderWidth: 1,
        backgroundColor: '#D1D1D1',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});

//make this component available to the app
export default SerieDetailPage;
