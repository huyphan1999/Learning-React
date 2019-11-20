/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import ReduxProject from './app/ReduxProject';
import ReduxSaga from './app-saga/ReduxSaga'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReduxSaga);
