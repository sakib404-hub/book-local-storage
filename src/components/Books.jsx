import React, { use } from 'react';
import Book from './Book';
import './books.css'

const Books = ({ booksPromises }) => {
    const books = use(booksPromises);
    // console.log(books)
    return (
        <div className='books_container'>
            {
                books.map((book) => {
                    return <Book
                        book={book}
                        key={book.id}>
                    </Book>
                })
            }
        </div>
    );
};

export default Books;