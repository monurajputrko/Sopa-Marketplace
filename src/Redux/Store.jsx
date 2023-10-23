import { legacy_createStore,applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import {ProductsReducer} from "./ProductReducer/ProductReducer.js"
import {QuantityReducer} from "./ProductReducer/QuantityReducer.js"


const rootReducer=combineReducers({ProductsReducer,QuantityReducer});

export  const store = legacy_createStore(rootReducer,applyMiddleware(thunk));


