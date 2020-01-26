import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import configureStore from './src/Store/Store';
import AppNavigation from './src/AppNaviator';

import { Provider } from 'react-redux'
const store = configureStore();

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

