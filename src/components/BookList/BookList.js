import React, { Component } from 'react';
import s from './BookList.module.css';

import { connect } from 'react-redux';
import BookListItem from '../BookListItem';
import WithBookStoreService from '../hoc/WithBookStoreService';
import { booksLoaded } from '../../actions';
import Spinner from '../Spinner/Spinner';

class BookList extends Component {

    componentDidMount() {
        const { bookStoreService, booksLoaded } = this.props;
        
        bookStoreService.getData()
            .then((data)=>{
                booksLoaded(data);
            });
    }

    render() {
        const { books, loading } = this.props;
        const listItem = books.map(book => {
            return <li key={book.id}><BookListItem books={book} /></li>
        })

        if(loading){
            return <Spinner />
        }

        return (
            <ul className={s.list}>
                {listItem}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
    }
};

const mapDispatchToProps = { booksLoaded };


export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));