import { createStore, applyMiddleware, compose } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions} from "./AsyncMiddleware";

var composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const SportsStoreDataStore = 
    createStore(
        CommonReducer(ShopReducer, CartReducer),
        composeEnhancer(applyMiddleware(asyncActions)));