import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Calculator from './Calculator';
import Counter from './Counter';
import Counter2 from './Counter2';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Counter/> */}
        {/* <Calculator/> */}
        <Counter2 value={10}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
