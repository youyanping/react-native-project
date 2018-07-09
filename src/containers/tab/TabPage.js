import React, { Component } from 'react';
import {DeviceEventEmitter, StyleSheet, Image, View, Text} from "react-native";
import * as utils from "../../constants/utils";
import UserPage from "./UserPage";
import TakePartPage from "./TakePartPage";
import DeliveryPage from "./DeliveryPage";
import TaskPage from "./TaskPage";
import TabNavigator from "react-native-tab-navigator";

export  default  class TabPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab:this.props.navigation.state.params&&this.props.navigation.state.params.index?this.props.navigation.state.params.index:'first',
            hidesTabTouch:false
        };
        this.firstTime={//处理第一次不发送通知
            first:0,
            second:0,
            third:0,
            fourth:0
        }
    }

    componentWillMount(){
        //super.componentWillMount();// 这个不能写，否则报错
    }

    async selectTab(type) {
        if (this.state.selectedTab != type) {
            if (type == 'first') {
                this.setState({selectedTab: 'first'});
                if(this.firstTime.first==0){
                    this.firstTime.first=1;
                }else{
                    DeviceEventEmitter.emit('tabEvent', {flag:'first'});
                }
            } else if (type == 'second') {
                this.setState({selectedTab: 'second'})
                if(this.firstTime.second==0){
                    this.firstTime.second=1;
                }else{
                    DeviceEventEmitter.emit('tabEvent', {flag:'second'});
                }
            } else if (type == 'third') {
                this.setState({selectedTab: 'third'})
                if(this.firstTime.third==0){
                    this.firstTime.third=1;
                }else{
                    DeviceEventEmitter.emit('tabEvent', {flag:'third'});
                }

            } else if (type == 'fourth') {

                this.setState({selectedTab: 'fourth'});
                if(this.firstTime.fourth==0){
                    this.firstTime.fourth=1;
                }else{
                    DeviceEventEmitter.emit('tabEvent', {flag:'fourth'});
                }

            }
        } else {
            utils.log("type", this.state.selectedTab);
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <TabNavigator hidesTabTouch={true}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'first'}
                        renderIcon={() => <Image style={styles.image} source={require('../../resources/images/home_normal.png')} />}
                        renderSelectedIcon={() => <Image style={styles.image} source={require('../../resources/images/home_focus.png')} />}
                        onPress={() =>{utils.noDoublePress(()=>{
                            this.selectTab('first')
                        }) }}>
                        <TaskPage {...this.props} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'second'}
                        renderIcon={() => <Image style={styles.image} source={require('../../resources/images/cart_normal.png')} />}
                        renderSelectedIcon={() => <Image style={styles.image} source={require('../../resources/images/cart_focus.png')} />}
                        onPress={() =>utils.noDoublePress(()=>{
                            this.selectTab('second')
                        }) }>
                        <DeliveryPage {...this.props}  />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'third'}
                        renderIcon={() => <Image style={styles.image} source={require('../../resources/images/category_normal.png')} />}
                        renderSelectedIcon={() => <Image style={styles.image} source={require('../../resources/images/category_focus.png')} />}
                        onPress={() => utils.noDoublePress(()=>{
                            this.selectTab('third')
                        })}>
                        <TakePartPage {...this.props}  />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'fourth'}
                        renderIcon={() => <Image style={styles.image} source={require('../../resources/images/faxian_normal.png')} />}
                        renderSelectedIcon={() => <Image style={styles.image} source={require('../../resources/images/faxian_focus.png')} />}
                        onPress={() =>utils.noDoublePress(()=>{
                            this.selectTab('fourth')
                        })}>
                        <UserPage {...this.props}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image:{
        height:38,
        width:50,
        position:"relative",
        top:8,
        resizeMode:'contain'
    }
});

