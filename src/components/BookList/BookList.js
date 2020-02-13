import React, { Component } from 'react';
import BookListItem from "../BookListItem";
import { connect } from 'react-redux';

class BookList extends Component {

    render(){
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map( book => {
                        return (
                                <li key={book.id}><BookListItem {...book} /></li>
                            )
                    })
                }
            </ul>
        );
    }

}

const mapStateToProps = ({ books }) => {
    return { books }
};

export default connect(mapStateToProps)(BookList);
