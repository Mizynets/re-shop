import React from 'react';
import { Link } from 'react-router-dom';
import s from'./Header.module.css';

const Header = ({numItems, total}) => {
    return(
        <div className={s.header}>
            <Link className={s.logo}>ReShop</Link>
            <span className={s.bucket}>
                <i className={`fa fa-shopping-cart cart-icon ${s.icon}` }></i>
                {numItems} total ({total})
            </span>
        </div>
    );
}

export default Header;