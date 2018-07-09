import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity, TextInput, Image,
} from 'react-native';
import NavigationBar from "../../components/NavigationBar";
import * as utils from "../../constants/utils";

export default class BindPhone extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    handleChange(){}

    render() {

        return (
            <View style={{flex: 1}}>
                <NavigationBar title={"绑定手机号"} {...this.props}/>

                <View style={{backgroundColor:'#fff'}}>
                    <Image style={{width:40,height:40}} source={require('../../resources/images/test.jpg')}/>
                    <Text>绑定后，下次登录可使用绑定的手机号登录。</Text>

                    <TouchableOpacity style={{width:utils.screenWidth,backgroundColor:"green",height:40,marginTop:50}}>
                        <Text style={{color:"#fff",textAlign:"center",lineHeight:40}}>绑定手机号</Text>
                    </TouchableOpacity>

                    <View style={[styles.row]}>
                        <Text style={styles.text}>手机号：</Text>
                        <TextInput style={styles.textInput}
                                   {...this.props}
                                   editable = {true}
                                   minLength = {2}
                                   maxLength = {50}
                                   placeholder = '请输入手机号码'
                                   placeholderTextColor={"#999"}
                                   underlineColorAndroid="transparent"
                                   defaultValue={''}
                                   onChangeText={(text)=>{this.handleChange('addr',text)}}
                        />
                    </View>
                    <View style={[styles.row]}>
                        <Text style={styles.text}>验证码：</Text>
                        <TextInput style={styles.textInput}
                                   {...this.props}
                                   editable = {true}
                                   minLength = {2}
                                   maxLength = {50}
                                   placeholder = '请输入验证码'
                                   placeholderTextColor={"#999"}
                                   underlineColorAndroid="transparent"
                                   defaultValue={''}
                                   onChangeText={(text)=>{this.handleChange('addr',text)}}
                        />
                        <TouchableOpacity>
                            <Text>获取验证码</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={{width:utils.screenWidth,backgroundColor:"green",height:40,marginTop:50}}>
                    <Text style={{color:"#fff",textAlign:"center",lineHeight:40}}>下一步</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        borderBottomColor:"#e4e4e4",
        borderBottomWidth:0.5
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