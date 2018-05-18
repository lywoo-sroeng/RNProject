import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View
} from 'react-native';

import HelloWorld from './HelloWorld';
import Component1, { Component2 } from './MultiComponent';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloWorld/>
        <Component1>
          <Text>Child Component</Text>
        </Component1>
        <Component2/>
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
