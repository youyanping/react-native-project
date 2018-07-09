import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    DeviceEventEmitter,
} from 'react-native';

export default class TaskPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){

        this.deEmitter = DeviceEventEmitter.addListener('tabEvent', (param) => {
            if(param.flag=='first'){

            }
        });
    }

    componentWillUnmount(){
        this.deEmitter&&this.deEmitter.remove();
    }
    render() {

        return (
            <View style={{flex: 1}}>
                <Text>first</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
});