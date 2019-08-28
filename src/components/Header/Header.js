import React from 'react';
import { Link } from 'react-router-dom';
import s from'./Header.module.css';
import { connect } from 'react-redux';
 
const Header = ({numItems, total}) => {
    return(
        <div className={s.header}>
            <Link to="/" className={s.logo}>ReShop</Link>
            <Link to="/cart" className={s.bucket}>
                <i className={`fa fa-shopping-cart cart-icon ${s.icon}` }></i>
                {numItems} total ({total})
            </Link>
        </div>
    );
}

const mapSateToProps = (state) => {
    return{
        numItems: state.shoppingCart.cartItems.length,
        total: state.shoppingCart.orderTotal,
    }
}

export default connect(mapSateToProps)(Header);