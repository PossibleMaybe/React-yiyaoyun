/**
 * Created by yongchunwu on 2017/6/16.
 */
import {createStore,combineReducers} from 'redux';

import {addToCart as reducer} from './../reducers/reducer';


const store = createStore(reducer);

export {store};