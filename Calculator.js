import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }

  add = () => {
    this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) });
  }

  setNum1 = (num1) => {
    this.setState({num1});
  }

  setNum2 = (num2) => {
    this.setState({num2});
  }

  render() {
    return (
      <View>
        <TextInput 
          placeholder='Number'
          onChangeText={this.setNum1}
        />
        <TextInput 
          placeholder='Number'
          onChangeText={this.setNum2}
        />
        <Text>{this.state.result}</Text>
        <Button title='Add' onPress={this.add}/>
      </View>
    );
  }
}