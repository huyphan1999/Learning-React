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

import FlatListComponent from './components/FlatListComponent';
import SelectedComponent from './components/SelectedComponent';
import selectReducer from './reducers/selectReducer';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import mySaga from './saga/DataSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(selectReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
export default class ReduxSaga extends Component {

    render() {
        return (
            <Provider store={store} >
                <View style={styles.container}>
                    <FlatListComponent />
                    <View style={{ marginTop: 20 }}>
                        <SelectedComponent />
                    </View>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        flex:1
    }
});
