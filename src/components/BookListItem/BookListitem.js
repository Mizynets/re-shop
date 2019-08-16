import React from 'react';
import s from'./BookListitem.module.css';

const BookListitem = ({ books }) => {

    const { title, author, price, bookImg } = books;
    console.log(bookImg)
    return (
        <div className={s.item}>
            <div className={s.item__img}>
                <img src={bookImg} alt="book-image"/>
            </div>
            <div className={s.content}>
                <div className={s.title}>{title}</div>
                <div className={s.author}>{author}</div>
                <div className={s.price}>{price}$</div>
                <button className={s.btn}>Add to cart</button>             
            </div>
        </div>
    );
}

export default BookListitem;