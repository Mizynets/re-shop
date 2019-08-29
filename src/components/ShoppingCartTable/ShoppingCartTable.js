import React from 'react';
import s from './ShoppingCartTable.module.css';
import { connect } from 'react-redux';
import { booksAddToCart, bookDeleteFromCart, bookDecFromCart } from '../../reduxStore/actions';


const ShoppingCartTable = ({ items, total, onAddItem, onDecItem, onTrushItem }) => {


    const createTableItem = items.map((item, indx) => {
        const { id, title, count, total } = item;
        return (<tr key={id} className={s.table__tr}>

      <td data-label="#">{++indx}</td>
      <td data-label="Title">{title}</td>
      <td data-label="Count">{count}</td>
      <td data-label="Price">${total}</td>
      
            <td data-label="Action">
                <button
                    className={s.btn}
                    onClick={() => onTrushItem(id)}
                >
                    <i className={`fa fa-trash-o ${s.trash}`}></i>
                </button>
                <button
                    className={s.btn}
                    onClick={() => onAddItem(id)}
                >
                    <i className={`fa fa-plus-circle ${s.plus}`}></i>
                </button>
                <button
                    className={s.btn}
                    onClick={() => onDecItem(id)}
                >
                    <i className={`fa fa-minus-circle ${s.minus}`}></i>
                </button>
            </td>
        </tr>);
    });

    return (
        <div className={s.ShoppingCartTable}>
            <h2>You Order</h2>
            <table className={s.tables}>
                <thead>
                    <tr className={s.table__tr}>
                        <th>#</th>
                        <th>Title</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {createTableItem.length === 0 ? 
                    <tr className={s.intro}>
                        <td colspan="5">Please select a book</td>
                    </tr> : createTableItem}
                </tbody>
            </table>
            <h3>Total ${total}</h3>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.cartItems,
        total: state.shoppingCart.orderTotal,
    }
}

const mapDispatchToProps = {
        onAddItem: booksAddToCart,
        onDecItem: bookDecFromCart,
        onTrushItem: bookDeleteFromCart,
    }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)