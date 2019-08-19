const booksLoaded = (newBooks) => {
    return{
        type: 'BOOKS_LOADED',
        payload: newBooks,
    }
};

const booksRequested = () => {
    return {
        type: "BOOKS_REQUESTED",
    }
};

const booksError = (err) => {
    return {
         type: "BOOKS_ERROR",
         payload: err,
    }
};

const booksAddToCart = (bookId) => {
    return {
        type: "BOOKS_ADD_TO_CART",
        payload: bookId,
    }
}

export {
    booksLoaded,
    booksRequested,
    booksError,
    booksAddToCart,
}