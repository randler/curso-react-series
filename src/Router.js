import { createStackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Register from './pages/Register';

export default createStackNavigator({
    'Login': {
        screen: LoginPage,
        navigationOptions: {
            title: "Bem vindo!",
        }
    },
    'Main': {
        screen: HomePage,
        navigationOptions: {
            headerTitleStyle: {
                color: '#2e333d',
                fontSize: 30,
            }
        }
    },
    'Register': {
        screen: Register,
        navigationOptions: {
            title: "Cadastrar",
            headerTitleStyle: {
                color: '#2e333d',
                fontSize: 30,
            }
        }
    }
}, {
  navigationOptions: {
      title: 'Series',
      headerTintColor: '#2e333d',
      headerStyle: {
          backgroundColor: '#d1d1d1',
          borderBottomWidth: 1,
          borderBottomColor: '#2e333d'
      },
      headerTitleStyle: {
          color: '#2e333d',
          fontSize: 30,
          flex: 1,
          textAlign: 'center'
      }
  }
})