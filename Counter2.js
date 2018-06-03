import React, { Component } from 'react';
import { Button } from 'react-native';

export default class Counter2 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  add = () => {
    this.setState({ counter: this.state.counter + (2 * this.props.value) });
  }

  render() {
    return (
      <Button
        title={(this.state.counter || 'Counter').toString()}
        onPress={this.add}
      />
    );
  }
}