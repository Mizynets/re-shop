import { combineReducers } from 'redux';
import reduxBookList from './ReduxBookList/reduxBookList';
import reduxShoppingCart from './ReduxShoppingCart/reduxShoppingCart';

export default combineReducers({
    reBookList: reduxBookList,
    reShoppingCart: reduxShoppingCart,
})

