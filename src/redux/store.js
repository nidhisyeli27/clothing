import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'
import createSagaMiddelware from 'redux-saga'

import rootSaga from './root-sagas';
import rootReducer from './root-reducer'

const sagaMiddleware = createSagaMiddelware();

const middelwares = [sagaMiddleware];

if (process.env.NODE_ENV==='development'){
    middelwares.push(logger);
}

export const store= createStore(rootReducer,applyMiddleware(...middelwares));

sagaMiddleware.run(rootSaga)

export const persistor=persistStore(store);
export default {store, persistor};



