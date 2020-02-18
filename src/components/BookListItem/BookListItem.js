import React from 'react';

import styles from './BooksListItem.module.scss';

const BookListItem = ({ id, title, author, price, coverImage }) => {
    console.log(styles);
    return (
        <div key={id} className={styles.booksListItem}>
            <div className={styles.booksCover}>
                <img src={coverImage} alt="cover" />
            </div>
            <div className={styles.bookDetails} >
                <a href="/" className={styles.bookTitle}>{ title }</a>
                <div className={styles.bookAuthor}>{ author }</div>
                <div className={styles.bookPrice}>{ price }</div>
                <button className="btn btn-info add-to-cart">Buy it</button>
            </div>
        </div>
    )
};

export default BookListItem;