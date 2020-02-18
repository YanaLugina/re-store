import React from 'react';
import BookList from "../BookList";
import ShoppingCart from "../ShoppingCart";

const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCart/>
        </div>
    )
};

export default HomePage;