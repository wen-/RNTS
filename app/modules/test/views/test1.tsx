import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'tools/dva';
import Actions from '../actions/test1';
import Toast from 'components/base/toast';
import Dialogs from 'components/base/dialogs';

interface Props {
  testData?: any;

}
interface State {

}

class Test1 extends Component<Props, State> {
  init: any;
  changeName: any;
  constructor(props: Props) {
    super(props);
    new Actions(this);
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
        <View style={{flex:1}}>
          <Text>左姓名：{this.props.testData&&this.props.testData.name}</Text>
          <TouchableOpacity onPress={()=>{
            this.changeName(123);
            //Toast.info('测试toast提示框');
            Dialogs.confirm({
              msg: '22222222',
              cancelTxt: 'no',
              confirmTxt: 'yes',
              cancelPress: ()=>{
                console.log('点了no');
              },
              confirmPress: ()=>{
                console.log('点了yes');
              }
            });
          }}>
            <Text>修改姓名为：123</Text>
          </TouchableOpacity>
        </View>
    );
  }

}
//此处不推荐用装饰器
export default connect((state: any) => {
  console.log("state:", state);
  return { testData: state.testData, title: '测试页' };
})(Test1);
