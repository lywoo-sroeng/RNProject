import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.section1}>
          <View style={styles.section1_1}/>
          <View style={styles.section1_2}/>
        </View>

        <View style={styles.section2}>
          <View style={styles.section2_1}/>
          <View style={styles.section2_2}>
            <View style={styles.section2_2_1}/>
            <View style={styles.section2_2_2}/>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    marginTop: 20
  },
  section1: {
    flex: 1,
    flexDirection: 'row'
  },
  section1_1: {
    flex: 1,
    backgroundColor: 'black',
    margin: 5
  },
  section1_2: {
    flex: 0.3,
    backgroundColor: 'green',
    margin: 5
  },
  section2: {
    flex: 1.5,
    flexDirection: 'row'
  },
  section2_1: {
    flex: 1,
    backgroundColor: 'green',
    margin: 5
  },
  section2_2: {
    flex: 1.2,
    flexDirection: 'column'
  },
  section2_2_1: {
    flex: 1,
    backgroundColor: 'grey',
    margin: 5
  },
  section2_2_2: {
    flex: 1,
    backgroundColor: 'black',
    margin: 5
  }
});
