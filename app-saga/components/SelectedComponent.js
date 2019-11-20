
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    View
} from 'react-native';

import { connect } from 'react-redux';

class SelectedComponent extends Component {

    render() {

        const  {data}  = this.props;
        let values= data.filter(item => item.isSelected == 1).map(item=> item.label);
        console.log("Selected Component")
        console.log(values)
        return (
            <View style={styles.selectContainer}>
                <Text style={{fontSize:20}}>Selected items: {values.toString()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    selectContainer: {
        height:100,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth:1
    }
});

export default connect(
    state => state
)(SelectedComponent)