import { createStackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';

export default createStackNavigator({
    /*'Login': {
        screen: LoginPage,
        navigationOptions: {
            title: "Bem vindo!",
        }
    },*/
    'Main': {
        screen: SeriesPage,
        navigationOptions: {
            title: "Minhas Series",
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
    },
    'SerieDetail': {
        screen: SerieDetailPage,
        navigationOptions: ({ navigation })=> {
            const {serie} = navigation.state.params;
            return {
                title: serie.title,
                headerTitleStyle: {
                    color: '#2e333d',
                    fontSize: 30,
                }
            }
        }
    },
    'SerieForm': {
        screen: SerieFormPage,
        navigationOptions:{
            title: 'Nova Serie',
            headerTitleStyle: {
                color: '#2e333d',
                fontSize: 30,
            }
        }
    },
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