import React from 'react';
import './App.css';
import $ from 'jquery';

const addToCart = (name, price) => {
    console.log(typeof price);
    alert(`Added ${name} - ${(+price).toFixed(2)}€`);
    // AJAX to inform server
};

const App = ({...props}) => {
    const { price, name } = props;

    return (
        <a href="#" className="btn btn-success" onClick={() => addToCart(name, price)}>Add to cart</a>
    );
};

export default App;
