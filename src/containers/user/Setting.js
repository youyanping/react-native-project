import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
} from 'react-native';
import NavigationBar from "../../components/NavigationBar";
import * as utils from "../../constants/utils";

export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    goPasswordReset(){
        const {navigate} = this.props.navigation;
        navigate('passwordReset',{});
    }

    goBindPhone(){
        const {navigate} = this.props.navigation;
        navigate('bindPhone',{});
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <NavigationBar title={"设置"} {...this.props}/>

                <View style={{backgroundColor:'#fff'}}>
                    <TouchableOpacity style={styles.item} onPress={()=>{this.goPasswordReset()}}>
                        <Text style={styles.itemTitle}>重置密码</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={()=>{this.goBindPhone()}}>
                        <Text style={styles.itemTitle}>绑定手机号</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{width:utils.screenWidth,backgroundColor:"green",height:40,position:"absolute",bottom:0}}>
                    <Text style={{color:"#fff",textAlign:"center",lineHeight:40}}>退出</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    item:{
        height:48,
        paddingLeft:12,
        paddingRight:12,
        backgroundColor:"#fff",
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:"#e4e4e4",
        borderBottomWidth:0.5
    },
    itemTitle:{
        color: "#333",
        fontSize: 16,
        flex:1
    }
});