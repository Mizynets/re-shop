import React, { Component } from 'react';
import s from './BookList.module.css';

import { connect } from 'react-redux';
import BookListItem from '../BookListItem';
import WithBookStoreService from '../hoc/WithBookStoreService';
import { booksAddToCart, thunkCreaterGetData } from '../../reduxStore/actions';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator';

import { bindActionCreators } from 'redux'

const BookList = ({ books, addedToCart }) => {
    return (
        <div className={s.wrapper}>
            <ul className={s.list}>
                {
                    books.map(book => {
                        return <li key={book.id}><BookListItem books={book} addedToCart={() => addedToCart(book.id)} /></li>
                    })}
            </ul>
        </div>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
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
        books: state.bookList.books,
        loading: state.bookList.loading,
        error: state.bookList.error,
    }
};

const mapDispatchToProps = (dispatch, ownprops) => {

    const { bookStoreService } = ownprops;

    return {
        fetchBooks: () => dispatch(thunkCreaterGetData(bookStoreService)()), 
        addedToCart: (id) => {
            dispatch(booksAddToCart(id));
        },
    }
};

export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));