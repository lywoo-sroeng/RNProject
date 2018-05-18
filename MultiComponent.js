import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Component1 extends Component {
  render() {
    return (
      <View>
        {this.props.children}
        <Text>{this.props.children}</Text>
      </View>
    );
  }
}

export class Component2 extends Component {
  render() {
    return <Text>{this.props.value}</Text>;
  }
}