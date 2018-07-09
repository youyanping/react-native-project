import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text, TouchableOpacity, Image,
} from 'react-native';
import NavigationBar from "../../components/NavigationBar";

export default class CommentDetail extends Component {
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
                <NavigationBar title={"评价详情"} {...this.props}/>
                <View style={{backgroundColor:'#fff',marginTop:10,padding:10}}>
                    <Text style={{textAlign:"center"}}>非常不满意</Text>
                    <View style={styles.row}>
                        <Image style={{width:40,height:40,marginRight:10}} source={require('../../resources/images/test.jpg')}/>
                    </View>
                    <View style={[styles.row,{flexWrap:"wrap",width:"100%",justifyContent: 'flex-start',paddingBottom:10,paddingTop:10}]}>
                        <View style={styles.btn}>
                            <Text style={styles.text}>关键词</Text>
                        </View>
                        <View style={styles.btn}>
                            <Text style={styles.text}>关键词</Text>
                        </View>
                        <View style={styles.btn}>
                            <Text style={styles.text}>关键词</Text>
                        </View>
                        <View style={styles.btn}>
                            <Text style={styles.text}>关键词</Text>
                        </View>
                        <View style={styles.btn}>
                            <Text style={styles.text}>关键词</Text>
                        </View>
                        <View style={styles.btn}>
                            <Text style={styles.text}>关键词</Text>
                        </View>
                        <View style={styles.btn}>
                            <Text style={styles.text}>关键词</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'#fff',marginTop:10,padding:10}}>
                    <Text>客服态度很好，客服态度很好</Text>
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
    btn:{
        borderColor:"#e4e4e4",
        borderRadius:30,
        borderWidth:0.5,
        height:30,
        paddingRight:10,
        paddingLeft:10,
        marginRight:10,
        marginBottom:10
    },
    text:{
        lineHeight:30
    }
});