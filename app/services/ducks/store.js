import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initState = {};

const store = createStore(persistedReducer, initState, applyMiddleware(thunk));
let persistor = persistStore(store);

// Exports
export {store, persistor};
