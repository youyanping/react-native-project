import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity,
} from 'react-native';
import NavigationBar from "../../components/NavigationBar";

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){

    }

    componentWillUnmount(){

    }

    render() {

        return (
            <View style={{flex: 1}}>
                <NavigationBar title={"个人信息"} {...this.props}/>

                <View style={{backgroundColor:'#fff'}}>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemTitle}>组织机构</Text>
                        <Text>福州分公司</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemTitle}>部门</Text>
                        <Text>仓储中心</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemTitle}>姓名</Text>
                        <Text>冰</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemTitle}>性别</Text>
                        <Text>女</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemTitle}>联系电话</Text>
                        <Text>15245245875</Text>
                    </TouchableOpacity>
                </View>
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