/**
 * Created by yongchunwu on 2017/6/10.
 */
import React,{Component} from 'react';
var reg = /goodsid=\d*/;
var id = /\d*/;
export default class ProductsDetail extends Component{

    componentDidMount(){
        var goodsid = window.location.hash;
        goodsid =reg.exec(goodsid);
        console.log(goodsid);
        goodsid = id.exec(goodsid[0]);
        console.log(goodsid[0]);
        console.log(id);
        console.log(goodsid);
    }

    render (){
        return (
            <div>
                <h3>商品详情</h3>
            </div>
        )
    }
}