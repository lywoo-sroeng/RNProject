import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class LayoutOne extends Component {
  render() {
    return(
      <View style={styles.container}>

        <View style={styles.header}/>

        <View style={styles.body} />

        <View style={styles.footer}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1,
    backgroundColor: '#349e00'
  },
  body: {
    flex: 10,
    backgroundColor: '#7cb405',
    alignItems: 'flex-start'
  },
  footer: {
    flex: 1,
    backgroundColor: '#AADD59'
  }
});