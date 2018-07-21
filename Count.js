import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { actionCreators } from './redux/countListRedux';
import CountList from './components/CountList';
import CountData from './components/CountData';
import Input from './components/Input';
import Title from './components/Title';

export default class Count extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentWillMount() {
    const { store } = this.props;
    const { counts } = store.getState();
    this.setState({ counts });
    this.unsubscribe = store.subscribe(() => {
      const { counts } = store.getState();
      this.setState({ counts });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAddCount = text => {
    const { store } = this.props;

    store.dispatch(actionCreators.add(text));
  };

  onRemoveCount = index => {
    const { store } = this.props;

    store.dispatch(actionCreators.remove(index));
  };

  render() {
    const { counts } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Title>COLOR BOX LIST</Title>
        <Input
          placeholder={'Type a Number, then hit enter!'}
          onSubmitEditing={this.onAddCount}
        />
        <CountList list={counts} onPressItem={this.onRemoveCount} />
        <View
          style={{
            position: 'absolute',
            height: 300,
            left: 0,
            right: 0,
            paddingTop: 20,
            borderTopWidth: 2,
            bottom: 0,
          }}>
          <CountData
            style={{ position: 'absolute', top: 150 }}
            list={counts}
            onPressItem={this.onRemoveCount}
          />
        </View>
      </View>
    );
  }
}
