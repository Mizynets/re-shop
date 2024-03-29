import React from 'react';
import s from'./BookListitem.module.css';

const BookListitem = ({ books, addedToCart }) => {

    const { title, author, price, bookImg } = books;
    return (
        <div className={s.item}>
            <div className={s.item__img}>
                <img src={bookImg} alt="books"/>
            </div>
            <div className={s.content}>
                <div className={s.title}>{title}</div>
                <div className={s.author}>{author}</div>
                <div className={s.price}>{price}$</div>
                <button
                onClick={addedToCart} 
                className={s.btn}
                >Add to cart</button>             
            </div>
        </div>
    );
}

export default BookListitem;