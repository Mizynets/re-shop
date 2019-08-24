import React, { Component } from 'react';
import s from './BookList.module.css';

import { connect } from 'react-redux';
import BookListItem from '../BookListItem';
import WithBookStoreService from '../hoc/WithBookStoreService';
import { booksLoaded, booksRequested, booksError, booksAddToCart } from '../../actions';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator';

import BookStoreService from '../../services/BookStoreService';
import { bindActionCreators } from 'C:/Users/aleks/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';

const BookList = ({ books, addedToCart }) => {
    return (
        <ul className={s.list}>
            {
                books.map(book => {
                    return <li key={book.id}><BookListItem books={book} addedToCart={() => addedToCart(book.id)} /></li>
                })}
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {

        const bookStoreService = new BookStoreService();
        booksRequested();
        
        bookStoreService.getData()
            .then((data) => {
                booksLoaded(data);
            })
            .catch((error) => { return booksError(error) });

    }

    render() {
        const { books, loading, error, addedToCart } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} addedToCart={addedToCart} />
    }
}

const mapStateToProps = (state) => {

    return {
        books: state.reBookList.books,
        loading: state.reBookList.loading,
        error: state.reBookListerror,
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        booksLoaded: bindActionCreators(booksLoaded, dispatch),
        booksError: bindActionCreators(booksError, dispatch),
        booksRequested: bindActionCreators(booksRequested, dispatch),

        addedToCart: (id) => {
            dispatch(booksAddToCart(id));
        },
    }
};

export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));