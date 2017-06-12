/**
 * Created by yongchunwu on 2017/6/10.
 */
import React,{Component} from 'react';
import './../css/productDetail.css';

import {strEnc,GLOBAL_URL} from './../config/des';

import {source,insureCode} from './../config/config';
let pageNo = 1;
export default class ProductsDetail extends Component{
    constructor(){
        super();
        this.state = {
            productDetails:[],
        };
    }

    componentWillMount(){

        var enResult = strEnc("[{\"cateId\":\"14\",\"yyyCode\":\"100080\",\"pageSize\":\"10\",\"pageNo\":\"" + pageNo + "\",\"source\":\"" + source + "\",\"groupCode\":\"" + insureCode + "\"}]", "100001", "", "");
        fetch(GLOBAL_URL+'?json=' + enResult)
            .then(response=>response.json())
            .then(responseData=>{console.log(responseData);
                let arr = this.state.productDetails;
                responseData.data.map((ele,index)=>{
                    arr.push(ele)
                });
                console.log(arr);
                this.setState({
                    productDetails:arr,
            })});
    }

    toProductsDetail(DRUG_CODE,supplycode){
        console.log(DRUG_CODE,supplycode);
        window.location.hash = '#/products?goodsid='+DRUG_CODE+'&supplycode='+supplycode;
    }

    render(){
        return (

            <div className="productDetails">
                {
                    this.state.productDetails.map((ele,index)=>(
                        <div className="wrapper" key={index} style={styles.item} onClick={()=>{this.toProductsDetail(ele.DRUG_CODE,ele.DRUG_SUPPLIER_CODE)}}>
                            <div >
                                <img src={ele.DRUG_IMG_URL} style={styles.img} alt=""/>
                                <span style={{width:'100%',display:'block',height:'26px'}}>{ele.NAME}</span>
                                <div>
                                    <p style={{display:ele['IS_OTC']==='1'?'block':'none',}} style={styles.otc}>OTC</p>
                                    <p style={styles.drugPrice}>¥：{ele.DRUG_PRICE}</p>
                                </div>


                            </div>

                        </div>
                    ))
                }
            </div>
        )
    }
};
const styles = {
    wrapper:{

    },
    item:{
      width:'50%',
      float:'left',
    },
    img:{
        width:'100%',
        height:'187px',
    },
    otc:{
        border:'1px solid orange',
        color:'orange',
        borderRadius:'2px',
        float:'left',
        marginLeft:'20px',
    },
    drugPrice:{
        float:'right',
        paddingRight:'20px',
    }
}