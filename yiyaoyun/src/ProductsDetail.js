/**
 * Created by yongchunwu on 2017/6/10.
 */
import React,{Component} from 'react';
import { Carousel } from 'antd-mobile';

import './css/productsDetail.css';
import {strEnc,GLOBAL_URL} from './config/des';
import {source,insureCode} from './config/config';
import {connect} from 'react-redux';


import NavBar1 from './Components/NavBar';

import {store} from './redux/stores/store';
import {addToCart as action} from './redux/actions/action';

var reg = /(\d)+/;

var DRUGSUPPLIERCODE = 'haoyaoshi';
var userID = '13771537698';
var DRUGCODE;

class ProductsDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            detailImg:[],
            mainDetail:{},
            unsubscribe:function(){

            },
        };

        console.log('props:',props);
        const {num,addItem} = props;
        console.log(num,addItem);
    }


    componentWillMount(){

        var goodsid = window.location.hash;
        DRUGCODE =reg.exec(goodsid)[0];

        console.log(insureCode,DRUGCODE,DRUGSUPPLIERCODE);
        console.log(DRUGCODE);
        console.log(DRUGSUPPLIERCODE);
        var enResult = strEnc("[{\"groupCode\":\"" + insureCode + "\",\"drugCode\":\"" + DRUGCODE + "\",\"pharmacyCode\":\"" + DRUGSUPPLIERCODE + "\",\"yyyCode\":\"100013\"}]", "100001", "", "");

        fetch("http://218.80.250.92:56679/healthy_service/healthy/dispatchV2",{method:'post',mode:"no-cor",body:enResult}).then(response => response.json()).then(responseData => {
            console.log(responseData);
            this.setState({
            detailImg:responseData.data.DRUG_IMG_URL,
            mainDetail:responseData.data,

            });

        });

    }
    componentDidMount(){

         this.subscribe();

    }
    subscribe(){
        var unsubscribe = store.subscribe(()=>{
            console.log('subscribe');
            console.log(DRUGCODE,this.state.detailImg[0]);
            var localDetail = {
                drugcode:DRUGCODE,
                img:this.state.detailImg[0],
            };
            localStorage.setItem('localDetail',JSON.stringify([localDetail]));
        });
        return unsubscribe;
    }
    componentWillUnmount(){
        this.subscribe()();
    }

    render(){
        var mainDetail = this.state.mainDetail;
        return (
            <div className="detailCarousel" style={{width:'100%',height:'100%'}}>
                <NavBar1 num={this.props.num}/>
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
                                style={styles.img}
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
                    <div className="mainDetail">
                        <h5 style={{color:'red',fontSize:'16px'}}>¥：{mainDetail.DRUG_PRICE}</h5>
                        <span style={{backgroundColor:'red',color:'white',marginRight:'10px',}}>正品保障</span>
                        <span style={{display:mainDetail.IS_OTC === '1'?'inline-block':'none',border:'1px solid green',color:'green',}}>OTC</span>
                        <h4>{mainDetail.DRUG_SUPPLIER_NAME}</h4>
                        <h3 style={{fontSize:'16px'}}>{mainDetail.NAME}</h3>
                        <a style={{marginRight:'5px'}}>运费：¥{mainDetail.DRUG_SHIP}</a>
                        <strong style={{marginRight:'5px'}}>月销：{mainDetail.BUY_COUNT}</strong>
                        <em>库存：{mainDetail.DRUG_STORE}</em>
                    </div>
                </div>

                <Footer addItem={this.props.addItem}/>

            </div>
        )
    }
}

class Footer extends Component {
    constructor(props){
        super(props)

    }


    render(){
        return(
            <div className="addCart" style={styles.addCart}>
                <div className="addToCart" style={styles.addToCart} onClick={()=>{
                    var object = JSON.parse(localStorage.getItem('localDetail'));


                    console.log(store.getState());
                    var status = store.getState().goods;
                    var alreadySatus = 1;
                    console.log('status',status,DRUGCODE);
                    for(let i= 0;i<status.length;i++){
                        if(status[i].drugcode === DRUGCODE){
                            alreadySatus = 0;
                        }
                    }

                    if(alreadySatus){
                        console.log('tianjia');
                        console.log()
                        return this.props.addItem(object);
                    }


                }}>
                    加入购物车
                </div>
                <div className="buyNow" style={styles.buyNow}>
                    立即购买
                </div>
            </div>
            )

    }


}

const styles = {
    img:{
        width:'100%',
        height:'3.75rem!important',
    },
    addCart:{
        display:'flex',
        position:'absolute',
        left:0,
        bottom:0,
        width:'100%',
        lineHeight:'44px',
        textAlign:'center',
    },
    addToCart:{
        flex:1,
        backgroundColor:'orange',
    },
    buyNow:{
        flex:1,
        backgroundColor:'red',
    }
};

function mapStateToProps(state){
    console.log(state);
     return {
       num:state.num,
    }
}

function mapDispatchToProps(dispatch){
    return {
        addItem:(object)=>dispatch(action(object))


    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsDetail);

