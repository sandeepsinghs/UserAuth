import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginPage from '../src/containers/LoginPage';
import HomePage from '../src/containers/HomePage';
import Colors from '../src/components/Colors';

const AppNavigation = createStackNavigator({

    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            header: null,
            title: 'Login',
        }
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: 'Dashboard',
            headerStyle: {
                backgroundColor: Colors.primeryColor,
            },
            headerTitleStyle: {
                color: Colors.white,
            },
            headerBackTitleStyle: {
                color: Colors.white,
            },
            headerTintColor: Colors.primeryColor,
            headerLeft: null,
        }
    },

});

const App = createAppContainer(AppNavigation);

export default App;
