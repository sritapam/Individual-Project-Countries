import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //to see states changes redux
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

