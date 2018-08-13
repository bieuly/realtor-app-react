import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Actions from './actions'

const store = createStore(rootReducer, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.dispatch(Actions.favorites.toggleFavorite(3))
store.dispatch(Actions.favorites.toggleFavorite(3))
store.dispatch(Actions.favorites.toggleFavorite(4))
store.dispatch(Actions.favorites.toggleFavorite(5))
store.dispatch(Actions.filter.setFilter('Stories'))
store.dispatch(Actions.realtyData.fetchRealtyData())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
