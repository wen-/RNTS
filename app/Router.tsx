import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
// @ts-ignore
import Icon from 'react-native-vector-icons/Entypo';
import CustomNavBar from './components/customNav'
import Test1 from './modules/test/views/test1';
import Test2 from './modules/test/views/test2';
import Test3 from './modules/test/views/test3';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
  navigationBar:{
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
    elevation: 0,
    height: 44,
  },
  navigationBarTitle:{
    fontSize: 18,
    fontWeight: 'normal',
    color: '#222',
    textAlign: 'center',
    alignSelf: 'center',
    flex:1
  }
});


const TabIcon = ({ focused, title, icontext }) => {
  let elem;
  // if(icontext == "paper-plane"){
  //   elem = <View style={{position:"absolute",zIndex:100,marginTop:-80,width:80,height:80,alignItems:"center",justifyContent:"center",backgroundColor:"#fff",borderRadius:50,borderColor:"#efefef",borderWidth:1}}>
  //     <Icon name={icontext} size={50} color={focused ? '#07f' :'#cccccc'} />
  //   </View>
  // }else{
  //   elem = <Icon name={icontext} size={20} color={focused ? '#07f' :'#cccccc'} />
  // }
  elem = <Icon name={icontext} size={20} color={focused ? '#07f' :'#cccccc'} />;
  return (
    elem
  );
};

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('reducer: ACTION:', action);
    return defaultReducer(state, action);
  };
};

const stateHandler = (prevState, newState, action) => {
  //console.log('onStateChange: ACTION:', action);
};

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const transitionConfig = () => ({
  screenInterpolator: StackViewStyleInterpolator.forHorizontal,
});

const Example = () => (
  <Router createReducer={reducerCreate} onStateChange={stateHandler} getSceneStyle={getSceneStyle} uriPrefix={prefix}>
    <Overlay key="overlay">
      <Modal key="modal" hideNavBar transitionConfig={transitionConfig}>
        <Scene key="root" titleStyle={{ alignSelf: 'center' }} hideNavBar>
          <Tabs
            key="tabsGroup"
            showLabel={true}
            tabBarPosition="bottom"
            swipeEnabled={false}
            lazy={true}
            legacy={false}
            activeBackgroundColor="white"
            inactiveBackgroundColor="white"
          >
            <Stack key="homeTab" tabBarLabel="首页" initial icon={TabIcon} icontext="dropbox">
              <Scene key="home" component={Test1} title="首页" navBar={CustomNavBar} />
            </Stack>

            <Stack key="financialTab" tabBarLabel="理财" showLabel={false} icon={TabIcon} icontext="credit">
              <Scene key="financial" component={Test2} title="理财" navBar={CustomNavBar} />
            </Stack>

            <Stack key="mineTab" tabBarLabel="我的" icon={TabIcon} icontext="user">
              <Scene key="mine" component={Test3} title="我的" navBar={CustomNavBar} />
            </Stack>

          </Tabs>
        </Scene>
      </Modal>

    </Overlay>
  </Router>
);

export default Example;
