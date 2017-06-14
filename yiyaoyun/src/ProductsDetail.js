/**
 * Created by yongchunwu on 2017/6/10.
 */
import React,{Component} from 'react';
import { Carousel } from 'antd-mobile';

import './css/productsDetail.css';
import {strEnc,GLOBAL_URL} from './config/des';
import {source,insureCode} from './config/config';



import NavBar1 from './Components/NavBar';

var reg = /(\d)+/;

var DRUGSUPPLIERCODE = 'haoyaoshi';
var userID = '13771537698';
var DRUGCODE;

export default class ProductsDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            detailImg:[],
        }
    }


    componentWillMount(){
        var goodsid = window.location.hash;
        DRUGCODE =reg.exec(goodsid)[0];

        console.log(insureCode,DRUGCODE,DRUGSUPPLIERCODE);
        console.log(DRUGCODE);
        console.log(DRUGSUPPLIERCODE);
        var enResult = strEnc("[{\"groupCode\":\"" + insureCode + "\",\"drugCode\":\"" + DRUGCODE + "\",\"pharmacyCode\":\"" + DRUGSUPPLIERCODE + "\",\"yyyCode\":\"100013\"}]", "100001", "", "");

        fetch("http://218.80.250.92:56679/healthy_service/healthy/dispatchV2",{method:'post',mode:"no-cor",body:enResult}).then(response => response.json()).then(responseData => {console.log(responseData);this.setState({detailImg:responseData.data.DRUG_IMG_URL
        })} )
    }

    render(){
        return (
            <div className="detailCarousel" style={{width:'100%',height:'300px'}}>
                <NavBar1/>
                <div className="body">
                    <Carousel
                        className="myCarousel"
                        autoplay={true}
                        infinite
                        selectedIndex={0}
                        swipeSpeed={35}

                    >
                        {this.state.detailImg.map((ii,index) => {

                            return (<img
                                className="carouselImg"
                                style={{height:'370px'}}
                                key={index}
                                src={ii}
                                alt="icon"
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({
                                        initialHeight: null,
                                    });
                                }}
                            />)
                        })}
                    </Carousel>
                </div>


            </div>
        )
    }
}

