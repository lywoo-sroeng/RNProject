import React, { Component } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

export default class MySectionList extends Component {

  renderSectionHeader({section: {subject}}) {
    return <Text style={styles.subject}>{subject}</Text>;
  }

  renderItem({item}) {
    return <Text style={styles.lesson}>{item}</Text>;
  }

  render() {
    return (
      <SectionList
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        sections={[
          {subject: 'React Native', data: ['lesson1', 'lesson2']},
          {subject: 'React JS', data: ['lesson1', 'lesson2']}
        ]}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const styles = StyleSheet.create({
  subject: {
    backgroundColor: 'lightgrey',
    padding: 5,
    fontSize: 20
  },
  lesson: {
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 10
  }
});
