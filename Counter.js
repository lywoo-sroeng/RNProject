import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Counter extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  // #1 Generate function
  add = () => {
    // #1 setState
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  // #2 Generate function
  sub() {
    // #2 setState
    this.setState({ counter: this.state.counter - 1 });    
  }

  render() {
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <Button 
          title='Add'
          onPress={this.add}  // #1 Invoke function
        />
        <Button
          title='Sub'
          onPress={() => this.sub()}  // #2 Invoke function
        />
      </View>
    );
  }
}