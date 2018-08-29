import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback,
    LayoutAnimation,
    NativeModules
} from 'react-native';

// Android
NativeModules.UIManager.setLayoutAnimationEnabledExperimental && 
NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LongText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        }
    }

    toggleIsExpanded() {
        const { isExpanded } = this.state;

        this.setState({
            isExpanded: !isExpanded
        });
    }

    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.spring();
    }

    render () {
        const {label = '', content = '-'} = this.props;
        const { isExpanded } = this.state;
        return (
            <View style={styles.line}>
                <Text style={[
                    styles.cell, 
                    styles.label,
                    ]}>{ label }</Text>
            <TouchableWithoutFeedback 
                onPress={ () => this.toggleIsExpanded()} >
                <View>
                    <Text style={[
                        styles.cell, 
                        styles.content,
                        isExpanded ? styles.expanded : styles.collapsed
                    ]}>{ content }</Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        );
    }
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
    },
    collapsed: {
        maxHeight: 70
    },
    expanded: {
        flex: 1
    }
});