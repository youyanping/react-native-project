import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
} from 'react-native';
import NavigationBar from "../../components/NavigationBar";

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    goCommentDetail(){
        const {navigate} = this.props.navigation;
        navigate('commentDetail',{});
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <NavigationBar title={"待评价"} {...this.props}/>
                <View style={{backgroundColor:"#fff",marginTop:10}}>
                    <View style={{paddingTop:10,paddingBottom:10}}>
                        <View style={[styles.row,{paddingLeft:10,paddingRight:10,paddingBottom:10,borderBottomWidth:0.5,borderBottomColor:"#e4e4e4"}]}>
                            <Text style={{flex:1}}>订单编号：xs1209182928392922</Text>
                            <Text style={{textAlign:"right"}}>待评价</Text>
                        </View>
                        <View style={{paddingLeft:10,paddingRight:10,borderBottomWidth:0.5,borderBottomColor:"#e4e4e4",paddingTop:10,paddingBottom:10}}>
                            <Text>商户名称</Text>
                            <Text>商户店铺地址</Text>
                            <View style={styles.row}>
                                <Text>订单距离：12公里</Text>
                                <Text>重量：5kg</Text>
                            </View>
                        </View>
                        <View style={[styles.row,{paddingLeft:10,paddingRight:10,justifyContent:"flex-end",paddingTop:10}]}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={{lineHeight:25}}>周冰棒</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn,{marginLeft:20}]} onPress={()=>{this.goCommentDetail()}}>
                                <Text style={{lineHeight:25}}>评价详情</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    btn:{
        height:25,
        paddingLeft:5,
        paddingRight:5,
        borderWidth:0.5,
        borderColor:"#e4e4e4",
        borderRadius:5
    }
});