import React, {Component} from 'react';
import {AppState} from "react-native";
import AppNavigator from "./routerConfig";

export  default  class RouterManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            progress: 0,
            type: 2,
            url: '',
            memo: '',
            modalType: 1
        };

        this.handleAppStateChange = this.handleAppStateChange.bind(this)

    }


    componentDidMount() {

        //监听状态改变事件
         AppState.addEventListener('change', this.handleAppStateChange);
    }


    //状态改变响应
    handleAppStateChange(appState) {
        if (appState == 'active') {
            try {
                AppState.hide();
            }catch (e){

            }
        }
    }

    componentWillUnmount() {
        this.emit && this.emit.remove();
        //删除状态改变事件监听
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    render() {
        const {dispatch, navigationState} = this.props;
        return (
            <AppNavigator />
        );
    }
}

