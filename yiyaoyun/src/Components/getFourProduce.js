/**
 * Created by yongchunwu on 2017/6/10.
 */
import React,{Component} from 'react';

import {strEnc,GLOBAL_URL,classify_URL} from './../config/des';

import {source,insureCode} from './../config/config';

export default class FourProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            fourProducts:[],
        }
    }

    componentWillMount(){
        var enResult = strEnc("[{\"class_level\":\"1\",\"yyyCode\":\"100001_1\",\"source\":\"" + source + "\",\"groupCode\":\"" + insureCode + "\"}]", "100001", "", "");

        fetch(GLOBAL_URL+'?json=' + enResult)
            .then(response=>response.json())
            .then(responseData=>{console.log(responseData);this.setState({
                fourProducts:responseData.data,
            })})
    }

    jumpApp(index){
       console.log(index);
    }

    render(){
        return (
            <div className="fourProduct" style={styles.container}>
                {
                    this.state.fourProducts.map((ele,index)=>(
                            <div key={index} style={styles.item} onClick={(e)=>{this.jumpApp(e)}}>
                                <div>
                                    <img src={`${classify_URL}${ele.imgpath}`} style={styles.img} alt=""/>
                                </div>
                                <div>
                                    <span>
                                        {ele.name}
                                    </span>
                                </div>
                            </div>
                    ))
                }
            </div>
        )
    }
}

const styles = {
    container:{
        display:'flex',
        flexDirection:'row',
        borderBottom:'1px solid #eee',
    },
    item:{
        flex:'1',
        textAlign:'center',
    },
    img:{
        zoom:'0.5',
    }
}