import {SHOW_LOAD} from "./contant";

let LoadingUtil = {
    showLoading(){
        if(SHOW_LOAD){
            global.mLoadingComponentRef && global.mLoadingComponentRef.showLoading();
        }

    },
    dismissLoading(){
        if(SHOW_LOAD){
            global.mLoadingComponentRef && global.mLoadingComponentRef.dismissLoading();
        }
    }
};

export default LoadingUtil;
