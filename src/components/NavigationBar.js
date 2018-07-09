import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native'
const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEIGHT_ANDROID = 44;

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', hide: false};
        this.goBack = this.goBack.bind(this);
    }

    goBack() {

        if (this.props.leftBackFn) {
            this.props.leftBackFn();
            if(this.props.navigation.state.params){
                let {goBackCallback}=this.props.navigation.state.params;
                if(goBackCallback){
                    goBackCallback();
                }
            }
        }else if (this.props.backToHome) {
            this.props.backToHome();
        }else {
            if(this.props.navigation.state.params){
                let {goBackCallback}=this.props.navigation.state.params;
                if(goBackCallback){
                    goBackCallback()
                }
            }
            this.props.navigation.goBack();
        }
    }

    render() {

        return (
            <View style={[styles.container, this.props.style]}>

                <View style={[styles.navBar]}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => {this.goBack()}}>
                        <Image style={styles.backBtnImage} source={require('../resources/images/back.png')}/>
                    </TouchableOpacity>

                    <View style={[styles.navBarTitleContainer]}>
                        <Text ellipsizeMode="head" numberOfLines={1} style={styles.title}>{this.props.title}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:Platform.OS=='ios'?20:0,
        borderBottomWidth:0.5,
        borderBottomColor:"#e4e4e4"
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    },

    backBtn: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position:"absolute",
        left:0,
        top:7
    },
    backBtnImage: {
        width: 9,
        height: 14
    },
    navBarTitleContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        color: '#333',
    }
})
