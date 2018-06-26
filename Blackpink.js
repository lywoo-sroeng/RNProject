import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Blackpink extends Component {

  constructor() {
    super();
    this.state = {
      isBlack: true
    };
  }

  getText() {
    return this.state.isBlack ? 'BLACK' : 'PINK'
  }

  getBackgroundColor() {
    return [styles.container, { backgroundColor: this.state.isBlack ? 'pink' : 'black' }];
  }

  changeTextAndBackgroundColor = () => {
    this.setState(({ isBlack }) => ({ isBlack: isBlack ? false : true }));
  };

  render() {
    return (
      <View style={this.getBackgroundColor()}>
        <Button title={this.getText()} onPress={this.changeTextAndBackgroundColor}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});