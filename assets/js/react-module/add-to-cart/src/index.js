import React from 'react';
import * as serviceWorker from './serviceWorker';
import App from './App';
import renderModuleOnElements from '../../utils/renderModuleOnElements';

const elements = document.getElementsByClassName('btn-add-to-cart');

renderModuleOnElements(App, elements);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
