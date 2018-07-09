import HTTPUtil from './HttpService'

let UserService ={};

/*商户-登入*/
UserService.login = (obj)=>{
    var url = "deliver/login/v1";
    return HTTPUtil.post(url, obj)
};

export default UserService