const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
    ],
    orderTotal: 210,
};

const createNewItem = (item, book) => {

    if (item) {
        return {
            ...item,
            count: item.count + 1,
            total: item.total + book.price,
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
            const bookId = action.payload;
            const book = state.books.find(({ id }) => id === bookId);
            const itemIdx = state.cartItems.findIndex(({ id }) => id === bookId);
            const item = state.cartItems[itemIdx];

            const newItem = createNewItem(item, book)
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIdx),
            }
        
        case 'BOOK_INC_FROM_CART':
            const bookI = action.payload;
            const boo = state.books.find(({id}) => id === bookI);
            const itemIx = state.cartItems.findIndex(({id}) => id === bookI);
            const ite = state.cartItems[itemIx];

            let newIncItem = {
                ...ite,
                count: ite.count + 1,
                total: ite.total + boo.price,
            }

            return{
                ...state,
                cartItems:[
                    ...state.cartItems.slice(0, itemIx),
                    newIncItem,
                    ...state.cartItems.slice(itemIx + 1),
                ]
            }

            case 'BOOK_DEC_FROM_CART':
            const ookI = action.payload;
            const oo = state.books.find(({id}) => id === ookI);
            const temIx = state.cartItems.findIndex(({id}) => id === ookI);
            const te = state.cartItems[temIx];

            let newDecItem = {
                ...te,
                count: te.count - 1,
                total: te.total - oo.price,
            }

            return{
                ...state,
                cartItems:[
                    ...state.cartItems.slice(0, temIx),
                    newDecItem,
                    ...state.cartItems.slice(temIx + 1),
                ]
            }

            case 'BOOK_DELETE_FROM_CART':
                    const bookIdd = action.payload;
                    const itemx = state.cartItems.findIndex(({id}) => id === bookIdd);
                    return {
                        ...state,
                        cartItems: [
                            ...state.cartItems.slice(0, itemx),
                            ...state.cartItems.slice(itemx + 1),
                        ]
                    }

        default: return state;
    }
}

export default reducer;