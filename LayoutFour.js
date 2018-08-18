import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LayoutFour extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pillarContainer}>
          <View style={styles.item1} />
          <View style={styles.item2} />
          <View style={styles.item3} />
          <View style={styles.item4} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>FLEXBOX FOR BEGINNER</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pillarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  item1: {
    width: 60,
    height: '90%',
    backgroundColor: '#2fcb70'
  },
  item2: {
    width: 60,
    height: '30%',
    backgroundColor: '#f1c310'
  },
  item3: {
    width: 60,
    height: '50%',
    backgroundColor: '#e74a3c'
  },
  item4: {
    width: 60,
    height: '95%',
    backgroundColor: '#3398da'
  },
  textContainer: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 15,
    backgroundColor: '#b660e5',
  }
});