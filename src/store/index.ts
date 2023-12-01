import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './auth/reducer';
import { crawlerReducer } from './crawler/reducer'

import { AuthState } from "./auth/types";
import { CrawlerState } from "./crawler/types";

export interface RootState {
    auth: AuthState;
    crawlers: CrawlerState;
};

export const rootReducer = combineReducers({
    auth: authReducer,
    crawlers: crawlerReducer
});

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);