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
    const { counter } = this.state;

    if(counter == 0) {
      this.setState({ counter: this.props.value });
    } else {
      this.setState({ counter: 2 * counter });
    }
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