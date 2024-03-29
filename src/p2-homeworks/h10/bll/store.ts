import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from 'redux';
import {themeReducer} from '../../h12/bll/themeReducer';

const reducers = combineReducers({
    loading: loadingReducer,
    themeReducer: themeReducer

})

export const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
export type AppDispatchType = typeof store.dispatch

// @ts-ignore
window.store = store // for dev
