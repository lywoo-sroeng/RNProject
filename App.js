import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyFlatList from './MyFlatList';
import MySectionList from './MySectionList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <MyFlatList/> */}
        <MySectionList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 5,
    paddingTop: 30
  }
});
