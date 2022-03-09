import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer/index';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
// import persistReducer from 'redux-persist/lib/persistReducer';

const persistConfig = {
    key: 'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  ));
const persistor = persistStore(store);
export default store;
export {persistor}