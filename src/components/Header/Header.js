import React from 'react';
import { Link } from 'react-router-dom';
import s from'./Header.module.css';

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

export default Header;