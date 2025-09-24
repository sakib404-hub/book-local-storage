import React from 'react';
import './Books.css'

const Book = ({ book, handleCart }) => {
    const imgLink = book.image;
    const imgAlt = book.description;
    console.log(book)
    return (
        <div className='card'>
            <div className='imageCard'>
                <img src={imgLink} alt={imgAlt} className='image' />
            </div>
            <p> <span>Title</span>  : {book.title}</p>
            <p> <span>Author</span>  : {book.author}</p>
            <p> <span>Genre</span>  : {book.genre}</p>
            <p> <span>Year</span>  : {book.year}</p>
            <button onClick={handleCart}>Buy Now</button>
        </div>
    );
};

export default Book;