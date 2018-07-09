import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity, TextInput, Image,
} from 'react-native';
import UserService from "../../network/UserService";
import * as utils from "../../constants/utils";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    login(){
        UserService.login({}).then((res)=>{
            utils.log("res",res);
        });

        const {navigate} = this.props.navigation;
        navigate('tabPage', {index: 'first'});

    }

    goPasswordReset(){
        const {navigate} = this.props.navigation;
        navigate('passwordReset',{});
    }

    render() {

        return (
            <View style={{flex: 1,backgroundColor:'#fff'}}>
                <Image style={{width:40,height:40}} source={require('../../resources/images/test.jpg')}/>
                <View style={[styles.row]}>
                    <Text style={styles.text}>账号：</Text>
                    <TextInput style={styles.textInput}
                               {...this.props}
                               editable = {true}
                               minLength = {2}
                               maxLength = {20}
                               keyboardType={'numeric'}
                               placeholder = '请输入账号'
                               placeholderTextColor={"#999"}
                               underlineColorAndroid="transparent"
                               defaultValue={''}
                               onChangeText={(text)=>{()=>{}}}
                    />
                </View>
                <View style={[styles.row]}>
                    <Text style={styles.text}>密码：</Text>
                    <TextInput style={styles.textInput}
                               {...this.props}
                               editable = {true}
                               minLength = {6}
                               maxLength = {6}
                               lable="密码"
                               secureTextEntry={true}
                               keyboardType={'numeric'}
                               placeholder = '请输入密码'
                               placeholderTextColor={"#999"}
                               underlineColorAndroid="transparent"
                               defaultValue={''}
                               onChangeText={(text)=>{()=>{}}}
                    />
                </View>

                <TouchableOpacity onPress={()=>this.goPasswordReset()}>
                    <Text style={{textAlign:"right"}}>忘记密码</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn,{left:"10%"}]} onPress={()=>{this.login()}}>
                    <Text style={{color:"#fff",lineHeight:40,textAlign:"center"}}>登录</Text>
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
    btn:{
        width:"80%",
        height:40,
        backgroundColor:"#000"
    },
    text:{
        height:50,
        lineHeight:50,
        paddingRight:10,
        paddingLeft:15,
        textAlign:'left',
        color:'#333'
    },
    textInput:{
        flex:1,
        height:50,
        padding:0
    }
});