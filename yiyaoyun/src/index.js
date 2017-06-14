import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
    Route,
    hashHistory} from 'react-router';

import App from './App';
import ProductsDetail from './ProductsDetail';
import ShopCart from './ShopCart';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <div>
            <Route path="/" component={App}/>
            <Route path="/products" component={ProductsDetail}/>
            <Route path="/shopcart" component={ShopCart} />
        </div>



    </Router>,
    document.getElementById('root'));
registerServiceWorker();
