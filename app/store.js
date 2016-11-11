/**
 * Created by acer on 2016/9/26.
 */
import * as reducers from './reducer/reducer';
import middlewares from './middleware';
import { createStore,combineReducers,applyMiddleware,compose } from 'redux';

const reducer = combineReducers(reducers);

// const finalCreateStore = compose.apply(this, middlewares.map(md => applyMiddleware(md)))(createStore);
const finalCreateStore = applyMiddleware(...middlewares)(createStore);
export const Store = finalCreateStore(reducer);

// export const Store = createStore(reducer);
