import {DURATION, URL} from '../constants/contant'
import * as utils from "../constants/utils";
import {AsyncStorage,Linking,Alert,DeviceEventEmitter} from 'react-native';
import Toast from "react-native";
import LoadingUtil from "../constants/LoadingUtil";

var HTTPUtil = {};
let alertFlag=0;
let tokenTimeoutFlag=0;

HTTPUtil.post = async function fetchRequestPost(url, params={}) {

    let token=null;
    token = await AsyncStorage.getItem("dcshop_token",(err,value)=>{
        if(!err){
            if(value){
                return value;
            }else{
                return '';
            }

        }else{
            return '';
        }

    });

    if(token==null||token=='null'){
        token ='';
        // token = '23c157b94ab7462d817e2e68f3e1ee4a';
    }

    utils.log("====url",URL + url +'?token='+ token);

    return new Promise((resolve, reject)=>{
        fetch(URL + url +'?token='+ token, {
            method: 'POST',
            headers: header,
            body:JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析
        }).then((response) => response.json()).then((responseData) => {

                if(responseData.resultCode=='99991'){
                    if(alertFlag==0){
                        alertFlag=1;
                        openWebSite(responseData);
                        resolve(responseData)
                    }
                    LoadingUtil.dismissLoading();
                }else if(responseData.resultCode=='1006'){
                    LoadingUtil.dismissLoading();
                    if(alertFlag==0){
                        alertFlag=1;
                        showTokenError(responseData);
                    }
                }else if(responseData.resultCode=='1015'){
                    if(tokenTimeoutFlag==0){
                        Toast.info("会话已过期，请重新登录",DURATION)
                        resolve(responseData)
                        clearToken()
                    }
                }else{
                    resolve(responseData);
                }
            }).catch( (err) => {
            LoadingUtil.dismissLoading();
                console.log('err:',url, err);   //网络请求失败返回的数据
                reject(err);
            });
    });
}

function clearToken(){
    AsyncStorage.removeItem('dcshop_token');
    AsyncStorage.removeItem('dcshop_authState');
    AsyncStorage.removeItem('customer');
}

function openWebSite(res){
    Alert.alert(
        '提示',
        res.message,
        [
            {text: '确定', onPress: () => {
                alertFlag=0;
                if(res.datas&&res.datas.website){
                    Linking.openURL(res.datas.website)
                        .catch((err)=>{
                            Toast.info('打开网页错误')
                        });
                }else{
                    // DeviceEventEmitter.emit('tokenError',{});
                }

            }},
        ],
        { cancelable: false }
    )
}

  showTokenError=(res)=>{
    Alert.alert(
        '下线通知',
        res.message,
        [
            {text: '退出', onPress: () =>  {
                alertFlag=0;
                DeviceEventEmitter.emit('tokenError',{});
            }},
            {text: '重新登录', onPress: () => {
                alertFlag=0;
                if(res.datas.website){
                    Linking.openURL(res.datas.website)
                        .catch((err)=>{
                            Toast.info('打开网页错误')
                        });
                }else{
                    DeviceEventEmitter.emit('tokenError',{});
                }

            }},
        ],
        { cancelable: false }
    )

}

export  default  HTTPUtil;