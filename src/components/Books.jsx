import React, { use } from 'react';
import Book from './Book';

const Books = ({ booksPromises }) => {
    const books = use(booksPromises);
    // console.log(books)
    return (
        <div>
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