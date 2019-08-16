import React from 'react';
import s from './ShoppingCartTable.module.css';

const ShoppingCartTable = () => {
    return(
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
                    <tr className={s.table__tr}>
                        <td>1</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className={s.btn}>
                                <i className={`fa fa-trash-o ${s.trash}`}></i>
                            </button>
                            <button className={s.btn}>
                                <i className={`fa fa-plus-circle ${s.plus}`}></i>
                            </button>
                            <button className={s.btn}>
                                <i className={`fa fa-minus-circle ${s.minus}`}></i>
                            </button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default ShoppingCartTable;