import React from 'react';
import './Books.css'

const Cart = ({ book, handleCancelOrder }) => {
    // console.log(book);
    return (
        <div className='cartCard'>
            <div className='cartImage'>
                <img src={book.image} alt={book.description}
                    style={{
                        height: '100%',
                        width: '100%'
                    }} />
            </div>
            <p><span>Name</span> : {book.title}</p>
            <button onClick={() => { handleCancelOrder(book) }}>Cancel Order</button>
        </div>
    );
};

export default Cart;    