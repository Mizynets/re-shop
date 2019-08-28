import reduxBookList from './ReduxBookList/reduxBookList';
import reduxShoppingCart from './ReduxShoppingCart/reduxShoppingCart';

const rootReducer = (state, action) => {
    return{
        bookList: reduxBookList(state, action),
        shoppingCart: reduxShoppingCart(state, action),
    }
}

export default rootReducer;

