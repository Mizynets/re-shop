import React, { Component } from 'react';
import s from './BookList.module.css';

import { connect } from 'react-redux';
import BookListItem from '../BookListItem';
import WithBookStoreService from '../hoc/WithBookStoreService';
import { bindActionCreators } from 'redux';
import { booksLoaded } from '../../actions';

class BookList extends Component {

    componentDidMount() {
        const { bookStoreService, booksLoaded } = this.props;
        booksLoaded(bookStoreService.getData())
        
    }

    render() {
        const { books } = this.props;
        const listItem = books.map(book => {
            return <li key={book.id}><BookListItem books={book} /></li>
        })

        return (
            <ul className={s.list}>
                {listItem}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = { booksLoaded };


export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));