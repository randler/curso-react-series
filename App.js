import { createStackNavigator } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';

export default createStackNavigator({
  'Login': {
      screen: LoginPage,
      navigationOptions: {
          title: "Bem vindo!",
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