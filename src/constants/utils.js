/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */

import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';
import {DEBUG} from "./contant";
let  lastPressTime=1;

var utils = {
    uiWidth: 375,//这里的值，是设计稿中的宽度，你们根据自己的设计稿改动，本人拿到的设计稿是iphone6的
    uiHeight: 667,//这里的值，是设计稿中的高度，你们根据自己的设计稿改动，本人拿到的设计稿是iphone6的
    pixel: 1 / PixelRatio.get(),
    screenWidth: Dimensions.get('window').width,
    screenHeith: Dimensions.get('window').height,
    pixelRatio: PixelRatio.get(),
    fontScale: PixelRatio.getFontScale(),
    scale: Math.min(Dimensions.get('window').height / 667, Dimensions.get('window').width / 375),

    /*宽度适配，例如我的设计稿某个样式宽度是50pt，那么使用就是：utils.autoWidth(50)*/
    autoWidth: function (value) {
        return Dimensions.get('window').width * value / this.uiWidth;
    },
    /*高度适配，例如我的设计稿某个样式高度是50pt，那么使用就是：utils.autoheight(50)*/
    autoheight: function (value) {
        return Dimensions.get('window').height * value / this.uiHeight;
    },
    /*字体大小适配，例如我的设计稿字体大小是17pt，那么使用就是：utils.setSpText(17)*/
    setSpText: function (number) {
        number = Math.round((number * this.scale + 0.5) * this.pixelRatio / this.fontScale);
        return number / PixelRatio.get();
    },
    /*通过value删除数组元素*/
    removeByValue: function (arr, value) {
        let i = arr.length;
        while (i--) {
            if (arr[i] === value) {
                arr.splice(i, 1);
            }
        }
    },
    log:(key,value)=>{
        if(DEBUG){
            setTimeout(()=>{
                console.log(key,value)
            })
        }
    },
    checkPhomeNumber:(phoneNumber)=>{
        var regPhone =/^1\d{10}$/;
        return  regPhone.test(phoneNumber);
    },
    checkCodeNumber:(codeString)=>{
        var regCheckNumber=/^\d{4}$/;
        return  regCheckNumber.test(codeString);
    },
    checkPassword:(paasword)=>{
        var regCheckNumber=/^.{6,12}$/;
        return  regCheckNumber.test(paasword);
    },
    checkLength(stringStr,minLength){
        let len=0;
        for (var i = 0; i <stringStr.length; i++) {
            var a = stringStr.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
            }
            else {
                len += 1;
            }
        }
        if (len >= minLength) {
            return true;
        }else{
            return false
        }
    },
    formatDate:(fmt,date)=>{
        var o = {
            "M+" : date.getMonth()+1,                 //月份
            "d+" : date.getDate(),                    //日
            "h+" : date.getHours(),                   //小时
            "m+" : date.getMinutes(),                 //分
            "s+" : date.getSeconds(),                 //秒
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S"  : date.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    },

    formatDate2:(date)=>{
        return date.substr(0,4)+'.'+date.substr(5,2)+'.'+date.substr(8,2);
    },
    checkIsImage:(url)=>{
        if(/.(png|jpg|jpeg)$/g.test(url)) {
            return true
        } else {
           return false
        }
    },
    checkLength2(stringStr,minLength,maxLength){
        let len=0;
        for (var i = 0; i <stringStr.length; i++) {
            var a = stringStr.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
            }
            else {
                len += 1;
            }
        }
        if (len >= minLength&&len<=maxLength) {
            return true;
        }else{
            return false
        }
    },


    setSpText:(size)=>{
        var scale = Math.min(this.uiWidth, this.uiHeight);
        size = Math.round((size * scale + 0.5) * this.pixelRatio / this.fontScale);
        return size;
    },
    /**
     * 屏幕适配,缩放size
     * @param size
     * @returns {Number}
     * @constructor
     */
    scaleSize:(size)=> {
        var scale = Math.min(this.uiWidth, this.uiHeight);
        size = Math.round((size * scale + 0.5));
        return size / 2;
    },
    checkIDNumber:(id)=>{
        var regCheckNumber=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return  regCheckNumber.test(id);

    },

    noDoublePress:(callback)=>{
            let curTime = new Date().getTime();
            if (curTime - lastPressTime > 500) {
                lastPressTime = curTime;
                callback();
            }
    },
    uuid:()=>{
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    },
    checkPictureFormat:(name)=>{
        let fdStart = name.indexOf("http");
        if(fdStart == 0){
            return true
        }else{
            return false
        }
    },
    // 截取时间 年月日
    timeChange(time,str) {
        var year = time.slice(0,4);
        var month = time.slice(5,7);
        var date = time.slice(8,10);
        return year + str + month + str + date;
    }

};


module.exports = utils;