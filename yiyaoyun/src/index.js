import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
    Route,
    hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {store} from './redux/stores/store';
import App from './App';
import ProductsDetail from './ProductsDetail';
import ShopCart from './ShopCart';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <div>
                <Route path="/" component={App}/>
                <Route path="/products" component={ProductsDetail}/>
                <Route path="/shopcart" component={ShopCart} />
            </div>



        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
