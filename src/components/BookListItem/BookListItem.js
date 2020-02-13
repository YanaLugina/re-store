import React, { Fragment } from 'react';

const BookListItem = ({ title, author }) => {
    return (
        <Fragment>
            <span>{ title }</span>
            <span>{ author }</span>
        </Fragment>
    )
};

export default BookListItem;