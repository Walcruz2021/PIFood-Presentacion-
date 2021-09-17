import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
//redux thuink sirve para trabajar con lñas llamadas asincronas 
import thunk from "redux-thunk"
import rootReducer from "../reducer"
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))  