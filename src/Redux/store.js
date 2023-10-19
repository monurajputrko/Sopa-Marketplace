import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {ProductsReducer} from "./Product_Page_Reducer/ProductPageReducer"
import thunk from "redux-thunk";




const rootReducer=combineReducers({ProductsReducer});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))