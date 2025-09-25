import React, { use, useState } from 'react';
import Book from './Book';
import './Books.css'
import Cart from './Cart';
import { getFromLocalStorage } from '../utilities/localStorage'

const Books = ({ booksPromises }) => {
    //? Making the promise as the data
    const books = use(booksPromises);
    const local = getFromLocalStorage();
    console.log(local);

    const [cartItem, setCartItem] = useState([])

    const handleCart = (book) => {
        //? Checking if the book already exist in the card
        const cartExists = cartItem.some((item) => item.id === book.id);

        if (cartExists) {
            return;
        }
        else {
            const newItem = [...cartItem, { ...book }];
            setCartItem(newItem);
        }
    }
    // console.log(cartItem);

    // Handle Cancel Order Functionalities 

    const handleCancelOrder = (book) => {
        console.log('Hellow This is the handler for canceling the order!');
        console.log(book.id);
        const itemsLeft = cartItem.filter((item) => item.id !== book.id)
        setCartItem(itemsLeft);
    }

    return (
        <div>
            <p className='cart' style={{
                textAlign: 'center'
            }}> <span>Cart Item</span> : {cartItem.length}
            </p>
            <div className='cartContainer'>
                {
                    cartItem.map((book) => {
                        return <Cart
                            key={book.id}
                            book={book}
                            handleCancelOrder={handleCancelOrder}></Cart>
                    })
                }
            </div>
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
        </div>
    );
};

export default Books;