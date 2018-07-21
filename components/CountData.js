import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export default class CountData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: false,
    };
  }
  renderItem = (text, i) => {
    let items = [];
    for (let i = 0; i < text; i++) {
      items.push({ count: i });
    }

    return (
      <View style={styles.mainView}>
        <View
          style={{
            width: text * 20,
            height: 20,
            backgroundColor: this.randomColor(),
            borderColor: 'black',
            borderWidth: 1,
          }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {items.map(count => {
              return (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={{ marginRight: 25, flex: 1 }}>*</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
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
  sortList(blnDirection) {
    const { list } = this.props;

    let direction = this.state.direction;
    if (direction) {
      list.sort(function(a, b) {
        return a - b;
      });
    } else {
      list.sort(function(a, b) {
        return b - a;
      });
    }
    this.setState({ direction: !this.state.direction });
    this.forceUpdate();
  }
  addHeight() {
    
  }
  render() {
    const { list } = this.props;

    return (
      <View style={styles.countMain}>
        <View style={{ height: 200 }}>
          <ScrollView>{list.map(this.renderItem)}</ScrollView>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.sortList()}
            onLongPress={() => this.addHeight()}
            title="Sort Data"
            color="#841584"
            accessibilityLabel="Sort Data"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});
