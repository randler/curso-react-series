import React from 'react';
import {
    TextInput,
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Slider,
    KeyboardAvoidingView,
    Picker,
} from 'react-native';
import FormRow from '../components/FormRow';
import CardStyle from '../components/CardStyle';

import { connect } from 'react-redux';
import { setField, saveSerie } from '../actions';

import { gender } from '../assets/utils/generos';

function genders() {
    return gender.map((value, index) => <Picker.Item 
                                            label={value} 
                                            key={index} 
                                            value={value} 
                                        />);
}

function renderButton(serieForm) {
    return (
        <TouchableOpacity 
            style={ styles.buttonLogin }
            onPress={ ()=> saveSerie(serieForm) }
            underlayColor="#FFF" >
            <Text style={styles.buttonLoginText} >Salvar</Text>
        </TouchableOpacity>
    );
}


const SeriesFormPage = ({serieForm, setField, saveSerie}) => (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}>
        <ScrollView>
            <CardStyle imagem="new-serie">
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="Título"
                        value={serieForm.title}
                        onChangeText={ value => setField('title', value) } />
                </FormRow>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="URL da imagem"
                        value={serieForm.img}
                        onChangeText={ value => setField('img', value) } />
                </FormRow>
                <FormRow>
                    <Picker
                        style={styles.picker}
                        value={serieForm.rate}
                        selectedValue={serieForm.gender}
                        onValueChange={ (itemValue) => setField('gender', itemValue) }>
                            {genders()}
                    </Picker>
                </FormRow>
                <FormRow>
                    <View style={styles.containerRate}>
                    <Text>Nota:</Text>
                    <Text>{serieForm.rate}</Text>
                    </View>
                    <Slider 
                        onValueChange={ value => setField('rate', value)}
                        minimumValue={ 0 }
                        maximumValue={ 100 }
                        step={5} />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição"
                        numberOfLines={4}
                        multiline={true}
                        value={serieForm.description}
                        onChangeText={ value => setField('description', value) } />
                </FormRow>
                {renderButton(serieForm)}
            </CardStyle>
        </ScrollView>
    </KeyboardAvoidingView>    
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
    },
    input: {
        paddingHorizontal: 5,
        paddingBottom: 5,
    },
    picker: {
        paddingHorizontal: 5,
    },
    itemPicker: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    containerRate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 3,
        marginLeft: 5,
    },
    buttonLogin: {
        backgroundColor: '#00aeef',
        marginHorizontal: 50,
        marginTop: 5,
        padding: 10,
        borderRadius: 5,
    },
    buttonLoginText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    },
});

function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}


const mapDispatchToProps = {
    setField,
    saveSerie
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesFormPage);