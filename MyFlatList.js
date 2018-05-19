import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default class MyFlatList extends Component {

  renderItem({item}) {
    return (
      <View style={styles.listItem}>
        <Text style={styles.subject}>{item.subject}</Text>
        <Text style={styles.price}>{item.price.toUpperCase()}</Text>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={
          [
            {subject: 'React Native', price: 'free'},
            {subject: 'React JS', price: 'free'}
          ]
        }
        keyExtractor={(item, index) => item.subject}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'lightgrey',
    marginHorizontal: 10,
    marginBottom: 3,
    padding: 10,
    borderRadius: 5
  },
  subject: {
    fontSize: 20,
    marginBottom: 5
  },
  price: {
    fontSize: 12
  }
});