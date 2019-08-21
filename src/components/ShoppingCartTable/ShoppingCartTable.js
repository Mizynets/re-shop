import React from 'react';
import s from './ShoppingCartTable.module.css';
import { connect } from 'react-redux';
import { bookIncFromCart, bookDeleteFromCart, bookDecFromCart } from '../../actions';

const ShoppingCartTable = ({ items, total, onAddItem, onDecItem, onTrushItem }) => {

    const createTableItem = items.map((item, indx) => {
        const { id, title, count, total } = item;
        return (<tr key={id} className={s.table__tr}>
            <td>{++indx}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>

            <td>
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
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {createTableItem}
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

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (id) => { console.log(id); return dispatch(bookIncFromCart(id))},
        onDecItem: (id) => dispatch(bookDecFromCart(id)),
        onTrushItem: (id) => dispatch(bookDeleteFromCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
