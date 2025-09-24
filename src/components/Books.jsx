import React, { use } from 'react';

const Books = ({ booksPromises }) => {
    const books = use(booksPromises);
    console.log(books)
    return (
        <div>
            <p>Name : </p>
        </div>
    );
};

export default Books;