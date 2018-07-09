import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    DeviceEventEmitter,
} from 'react-native';

export default class DeliveryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){

        this.deEmitter = DeviceEventEmitter.addListener('tabEvent', (param) => {
            if(param.flag=='second'){

            }
        });
    }

    componentWillUnmount(){
        this.deEmitter&&this.deEmitter.remove();
    }
    render() {

        return (
            <View style={{flex: 1,backgroundColor:'#fff'}}>
                <Text>second</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});