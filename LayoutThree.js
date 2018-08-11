import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default class Car extends Component {
  render() {
    return (
      <View style={styles.boxContainer}>
        <View style={styles.boxOneContainer}>
          <View style={styles.box} />
        </View>
        <View style={styles.boxThreeContainer}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <View style={styles.boxOneContainer}>
          <View style={styles.box} />
        </View>
        <View style={styles.boxThreeContainer}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  boxOneContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  boxThreeContainer: {
    flexDirection: 'row'
  },
  box: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    backgroundColor: '#a7b0b3c4'
  }
});