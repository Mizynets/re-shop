import { stat } from "fs";

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
    ],
    orderTotal: 210,
};

const createNewItem = (item, book, quantity) => {

    if (item) {
        return {
            ...item,
            count: item.count + quantity,
            total: item.total + book.price*quantity,
        };
    } else {
        return {
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price,
        };
    }
}

const updateCartItems = (cartItems, item, indx) => {

    if(item.count == 0){
        return [
            ...cartItems.slice(0, indx),
            ...cartItems.slice(indx + 1),
        ]
    }

    if (indx < 0) {
        return [
            ...cartItems,
            item,
        ]
    }
    return [
        ...cartItems.slice(0, indx),
        item,
        ...cartItems.slice(indx + 1),
    ]
}

const updateOrder = (state, bookId, quantity) => {

    const { books, cartItems } = state
    
    const book = books.find(({ id }) => id === bookId);
    const itemIdx = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIdx];

    const newItem = createNewItem(item, book, quantity)

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIdx),
    }
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {

        case "BOOKS_REQUESTED":
            return {
                ...state,
                books: [],
                loading: true,
                error: null,
            };

        case "BOOKS_LOADED":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,
            };

        case "BOOKS_ERROR":
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,
            };

        case 'BOOKS_ADD_TO_CART':
           return updateOrder(state, action.payload, 1);

        case 'BOOK_INC_FROM_CART':
                return updateOrder(state, action.payload, 1);

        case 'BOOK_DEC_FROM_CART':
                return updateOrder(state, action.payload, -1);

        case 'BOOK_DELETE_FROM_CART':
            const item = state.cartItems.find(({id}) => id === action.payload)
                return updateOrder(state, action.payload, -item.count);   

        default: return state;
    }
}

export default reducer;