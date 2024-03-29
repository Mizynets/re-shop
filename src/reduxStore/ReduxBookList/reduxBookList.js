let initialState = {
    bookList: {
        books: [],
        loading: true,
        error: null,
    }  
}

const reduxBookList = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        
        case "BOOKS_REQUESTED":
            return {
                books: [],
                loading: true,
                error: null,
            };

        case "BOOKS_LOADED":
            return {
                books: action.payload,
                loading: false,
                error: null,
            };

        case "BOOKS_ERROR":
            return {
                books: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state.bookList;
    }
}

export default reduxBookList;