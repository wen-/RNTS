import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'tools/dva';

class Test2 extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>理财版块</Text>
      </View>
    );
  }
}

export default connect(({ testData }: any) => ({ testData }))(Test2);
