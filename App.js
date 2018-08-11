import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';
import LayoutThree from './LayoutThree';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <LayoutTwo />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
