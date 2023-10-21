import { legacy_createStore,applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import {ProductsReducer} from "./ProductReducer/ProductReducer.js"


const rootReducer=combineReducers({ProductsReducer});

export  const store = legacy_createStore(rootReducer,applyMiddleware(thunk));


