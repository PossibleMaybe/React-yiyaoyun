import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
    Route,
    hashHistory} from 'react-router';

import App from './App';
import ProductsDetail from './ProductsDetail';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <div>
            <Route path="/" component={App}/>
            <Route path="/products" component={ProductsDetail}/>
        </div>



    </Router>,
    document.getElementById('root'));
registerServiceWorker();
