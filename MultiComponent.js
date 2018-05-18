import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Component1 extends Component {
  render() {
    return this.props.children;
  }
}

export class Component2 extends Component {
  render() {
    return <Text>Component 2</Text>;
  }
}