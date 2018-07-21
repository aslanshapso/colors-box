import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class CountList extends Component {
  renderItem = (text, i) => {
    const { onPressItem } = this.props;

    let items = [];
    for (let i = 0; i < text; i++) {
      items.push({ count: i });
    }

    return (
      <TouchableOpacity style={styles.item} onLongPress={() => onPressItem(i)}>
        <View style={styles.mainView}>
          <Text style={{ marginTop: 1}}> {text} </Text>
          <View
            style={{
              width: text * 30,
              height: 20,
              backgroundColor: this.randomColor(),
              marginBottom: 10,
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              {items.map(count => {
                return <Text style={{ marginRight: 25 }}>*</Text>;
              })}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  randomColor() {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  }
  render() {
    const { list } = this.props;

    return (
      <View style={styles.countMain}>
        <ScrollView>{list.map(this.renderItem)}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
  countMain: {
    height: 150,
  }
});
