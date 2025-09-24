import React, { use } from 'react';
import Book from './Book';
import './books.css'

const Books = ({ booksPromises }) => {
    //? Making the promise as the data
    const books = use(booksPromises);

    const handleCart = () => {
        console.log('The Button is Clicked!')
    }

    return (
        <div className='books_container'>
            {
                books.map((book) => {
                    return <Book
                        book={book}
                        key={book.id}
                        handleCart={handleCart}>
                    </Book>
                })
            }
        </div>
    );
};

export default Books;