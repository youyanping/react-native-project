import TabPage from "../containers/tab/TabPage";
import TaskPage from "../containers/tab/TaskPage";
import DeliveryPage from "../containers/tab/DeliveryPage";
import TakePartPage from "../containers/tab/TakePartPage";
import UserPage from "../containers/tab/UserPage";
import StackNavigator from "react-navigation/src/navigators/createContainedStackNavigator";
import LoginPage from "../containers/tab/LoginPage";
import userRouter from "./userRouter";

const stackNavigationConfig = {
    ...userRouter,
    tabPage: { screen: TabPage },
    loginPage: { screen: LoginPage },
    taskPage:{screen: TaskPage},
    deliveryPage:{screen: DeliveryPage},
    takePartPage:{screen: TakePartPage},
    userPage:{screen: UserPage},
};

const navigationOptions  = {
    initialRouteName: 'loginPage',
    navigationOptions: {
        header:null,
        headerBackTitle: null,
        headerTintColor: 'white',
        showIcon: true,
        swipeEnabled: false,
        animationEnabled: false,
        headerStyle: {
            backgroundColor: '#38568d',
        }
    },
    mode: 'card',
    headerMode: 'float',
};

const AppNavigator = StackNavigator(stackNavigationConfig,navigationOptions );

export default AppNavigator;