//import liraries
import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer  from './reducers';

const store = createStore(rootReducer, composeWithDevTools(
                                    applyMiddleware(reduxThunk)
                                ));

// create a component
const SeriesApp = props => (
    <Provider store={store}>
        <Router />
    </Provider>
);

//make this component available to the app
export default SeriesApp;
