import { Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'
// @ts-ignore
import Icon from 'react-native-vector-icons/Entypo';
const h = (Platform.OS === 'ios') ? 64 : 44;
const pt = (Platform.OS === 'ios') ? 20 : 0;
const styles = StyleSheet.create({
    container: {
        height: h,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: pt
    },
    navBarLeftItem: {
        position:"absolute",
        zIndex:10,
        left:0,
        top:0,
        width:50,
        height:h,
        paddingLeft:10,
        paddingTop: pt,
        justifyContent: 'center'
    },
    navBarTitleItem:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        paddingLeft:50,
        paddingRight:50,
    },
    navBarRightItem:{
        position:"absolute",
        zIndex:10,
        right:0,
        top:0,
        width:50,
        height:h,
        paddingTop: pt,
        justifyContent:'center'
    },
    navTitle:{
        color:"#000",
        fontSize:16,
    }
});

interface Props {
    title: string;
    initialRouteName: string;
}
interface State {
    currentScene: any;
}

export default class CustomNavBar extends React.Component<Props, State> {

    navBar: any;

    constructor(props: Props) {
        super(props);
        this.state={
            currentScene: props.initialRouteName,
        };
        this.navBar = React.createRef();
    }

    componentWillMount(){

    }

    componentWillUnmount() {

    }

    renderLeft() {
        if (['home', 'financial', 'mine'].includes(this.state.currentScene)) {
            return null;
        } else {
            return (
                <TouchableOpacity
                    onPress={()=>{
                        Actions.pop()
                    }}
                    style={[styles.navBarLeftItem]}>
                    <Icon name={"reply"} size={20} color={'#000'} />
                </TouchableOpacity>
            )
        }
    }

    renderMiddle() {
        return (
            <View style={styles.navBarTitleItem}>
                <Text style={styles.navTitle}>{ this.props.title }</Text>
            </View>
        )
    }

    renderRight() {
        return null;
    }

    render() {
        return (
            <View style={[styles.container]} ref={this.navBar}>
                { this.renderLeft() }
                { this.renderMiddle() }
                { this.renderRight() }
            </View>
        )
    }
}