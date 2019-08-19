const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
    ],
    orderTotal: 210,
};

const reducer = (state = initialState, action) => {
    
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
            const bookId = action.payload
        const book = state.books.find(({id}) => id === bookId);
        const itemIdx = state.cartItems.findIndex(({id}) => id === bookId);
        const item = state.cartItems[itemIdx]; 
        let newItem;

        if(item){
            newItem =  {
                ...item,
                count: item.count + 1,
                total: item.total + book.price,
            };
        } else {
            newItem =  {
                id: book.id,
                title: book.title,
                count: 1,
                total: book.price,
            };
        }
        if(itemIdx < 0){
            return{
                ...state,
                cartItems: [
                    ...state.cartItems,
                    newItem,
                ]
            }
        } else {
            return{
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, itemIdx),
                    newItem,
                    ...state.cartItems.slice(itemIdx + 1),
                ]
            }
        }
            
        default: return state;
    }
}

export default reducer;