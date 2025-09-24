import React from 'react';

const Book = ({ book }) => {
    const imgLink = book.image;
    const imgAlt = book.description;
    return (
        <div>
            <div>
                <img src={imgLink} alt={imgAlt} />
            </div>
            <p> Name : </p>
        </div>
    );
};

export default Book;