/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import FetchDataFromParse from '@dev/FetchDataFromParse';
import LoginScreen from '@auth/Login';

AppRegistry.registerComponent(appName, () => LoginScreen);
