
import UserInfo from "../containers/user/UserInfo";
import Setting from "../containers/user/Setting";
import PasswordReset from "../containers/user/PasswordReset";
import BindPhone from "../containers/user/BindPhone";
import CommentList from "../containers/user/CommentList";
import CommentDetail from "../containers/user/CommentDetail";

const userRouter = {
    userInfo: { screen: UserInfo },
    setting: { screen: Setting },
    passwordReset: { screen: PasswordReset },
    bindPhone: { screen: BindPhone },
    commentDetail: { screen: CommentDetail },
    commentList: { screen: CommentList },
};

export default userRouter;