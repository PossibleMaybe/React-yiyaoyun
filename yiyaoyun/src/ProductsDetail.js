/**
 * Created by yongchunwu on 2017/6/10.
 */
import React,{Component} from 'react';
import './css/productsDetail.css';
import {strEnc,GLOBAL_URL} from './config/des';
import {source,insureCode} from './config/config';


import NavBar1 from './Components/NavBar';

var reg = /(\d)+/;

var DRUGSUPPLIERCODE = 'haoyaoshi';
var userID = '13771537698';
var DRUGCODE;
export default class ProductsDetail extends Component{

    componentWillMount(){
        var goodsid = window.location.hash;
        DRUGCODE =reg.exec(goodsid)[0];

        console.log(insureCode,DRUGCODE,DRUGSUPPLIERCODE);
        console.log(DRUGCODE);
        console.log(DRUGSUPPLIERCODE);
        var enResult = strEnc("[{\"groupCode\":\"" + insureCode + "\",\"drugCode\":\"" + DRUGCODE + "\",\"pharmacyCode\":\"" + DRUGSUPPLIERCODE + "\",\"yyyCode\":\"100013\"}]", "100001", "", "");

        fetch("http://218.80.250.92:56679/healthy_service/healthy/dispatchV2",{
            method:'post',
            body:enResult,
        })
            .then(response => response.json())
            .then(responseData => {console.log(responseData)} )

    }

    render (){
        return (
            <div>
                <NavBar1 />
            </div>
        )
    }
}