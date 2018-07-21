import { createStore } from 'redux';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// Import the reducer and create a store
import { reducer } from './redux/countListRedux';     
const store = createStore(reducer);

import Count from './Count';
  
export default class App extends Component {
  render() {
    return ( 
      <View style={styles.container}>
         <Count store={store} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dddddd',
  },
});
