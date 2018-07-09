import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, TouchableOpacity,
} from 'react-native';
import NavigationBar from "../../components/NavigationBar";
import * as utils from "../../constants/utils";

export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){
    }

    componentWillUnmount(){

    }

    goUserInfo(){
        const {navigate} = this.props.navigation;
        navigate('userInfo',{});
    }

    goSetting(){
        const {navigate} = this.props.navigation;
        navigate('setting',{});
    }

    goCommentList(){
        const {navigate} = this.props.navigation;
        navigate('commentList',{});
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <View style={{backgroundColor:"green",paddingBottom:10}}>
                    <TouchableOpacity style={[styles.row,{padding:20,marginBottom:20}]} onPress={()=>this.goUserInfo()}>
                        <Image style={{width:40,height:40,borderRadius:30,overflow:"hidden",marginRight:10}} source={require('../../resources/images/test.jpg')}/>
                        <View style={{flex:1}}>
                            <Text>配送员-张三</Text>
                            <Text>18542154854</Text>
                        </View>
                        <Image style={{marginLeft: 10, width: 12, height: 12, resizeMode: 'contain'}}
                               source={require('../../resources/images/arrow-right.png')}/>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <TouchableOpacity style={{flex:1}}>
                            <Text style={{textAlign:'center'}}>评分：20</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}}>
                            <Text style={{textAlign:'center'}}>评价率：20</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}}>
                            <Text style={{textAlign:'center'}}>送达数：20</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.row,{backgroundColor:"#fff",paddingBottom:10,paddingTop:10,marginTop:10}]}>
                    <TouchableOpacity style={{flex:1,alignItems:'center',borderRightColor:"#e4e4e4",borderRightWidth:0.5}} onPress={()=>this.goCommentList()}>
                        <Image style={{width:30,height:30}} source={require('../../resources/images/test.jpg')}/>
                        <Text>待评价</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,alignItems:'center'}} onPress={()=>this.goCommentList()}>
                        <Image style={{width:30,height:30}} source={require('../../resources/images/test.jpg')}/>
                        <Text>已评价</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.item} onPress={()=>this.goSetting()}>
                    <Text style={styles.itemTitle}>设置</Text>
                    <Image style={{marginLeft: 10, width: 12, height: 12, resizeMode: 'contain'}}
                               source={require('../../resources/images/arrow-right.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemTitle}>版本信息</Text>
                    <Text>V1.0.0</Text>
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
        marginTop:10,
        paddingLeft:12,
        paddingRight:12,
        backgroundColor:"#fff",
        flexDirection:'row',
        alignItems:'center'
    },
    itemTitle:{
        color: "#333",
        fontSize: 16,
        flex:1
    }
});