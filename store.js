import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';

import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './features/reducers';
import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

let persistConfig = {key: 'root', storage: AsyncStorage};

let rootReducer = combineReducers(reducers);

let persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
