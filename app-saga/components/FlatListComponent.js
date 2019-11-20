import React, { Component } from 'react';
import { PureComponent } from 'react';
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

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Select from '../actions/TaskListActions';


class FlatListComponent extends Component {

    renderItem = ({ item, index }) => {
        let currColor = 'white';
        if (item.isSelected == 1) {
            currColor = '#f6ad7b';
        }
        console.log(`I am ${item.id}`)
        return (
                <TouchableOpacity style={[styles.itemContainer, { backgroundColor: currColor }]}
                    onPress={() => this.props.onSelect(index)}>
                    <Text style={{ fontWeight: "bold" }}>{item.label}</Text>
                </TouchableOpacity>
        );

    }
    render() {

        const { data } = this.props;
        return (
            <FlatList
                style={{ borderWidth: 1, borderRadius: 10 }}
                horizontal={false}
                numColumns={4}
                data={data}
                extraData={this.props}
                keyExtractor={item => item.id}
                renderItem={this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 6,
        fontSize: 20,
        margin: 18
    }
});

export default connect(
    state => state,
    dispatch => {
        return {
            onSelect: (index) => dispatch(Select(index)),
        }
    }
)(FlatListComponent)

