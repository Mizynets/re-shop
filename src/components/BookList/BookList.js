import React, { Component } from 'react';
import s from './BookList.module.css';

import { connect } from 'react-redux';
import BookListItem from '../BookListItem';
import WithBookStoreService from '../hoc/WithBookStoreService';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator';

const BookList = ({books}) => {
    return (
        <ul className={s.list}>
            {
                books.map(book => {
                    return <li key={book.id}><BookListItem books={book} /></li>
                })}
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books}/>
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const { bookStoreService } = ownProps;

    return {
        fetchBooks: () => {
            dispatch(booksRequested());
            bookStoreService.getData()
                .then((data) => {
                    dispatch(booksLoaded(data));
                })
                .catch((error) => { return dispatch(booksError(error)) });
        }
    }
};

export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));