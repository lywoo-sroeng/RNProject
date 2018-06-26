import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Blackpink from './Blackpink';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Blackpink/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
