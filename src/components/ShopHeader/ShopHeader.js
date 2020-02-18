import React from 'react';

import style from './ShopHeader.module.scss';

const ShopHeader = ({ numItems, total }) => {
    return (
        <div className={`${style.shopHeader} row`}>
            <a className="logo text-dark" href="#">Re-Store</a>
            <a className={style.shoppingCart}>
                <i className={`${style.cartIcon} fa fa-shopping-cart`} />
                { numItems } items (${total})
            </a>
        </div>
    );
};

export default ShopHeader;

