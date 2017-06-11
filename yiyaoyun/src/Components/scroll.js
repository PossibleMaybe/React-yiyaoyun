/**
 * Created by yongchunwu on 2017/6/10.
 */
import React,{Component} from 'react';
import BScroll from 'better-scroll';

import Carousel1 from './../Components/Carousel';
import FourProduct from './../Components/getFourProduce';
import ProductsDetail from './../Components/productDetail';


export default class Scroll extends Component{
    constructor(props){
        super(props);
    }


    componentDidMount(){
        console.log(this.refs.outerScroll.clientHeight);
        console.log(this.refs.scroll.clientHeight);
        const myScroll = new BScroll(this.refs.outerScroll,{
            click:true,
        });
        console.log(myScroll);
        console.log([this.refs.scroll]);
        console.log('didMount');
    }
    render(){
        return (
            <div className="outerScroll" ref="outerScroll" style={styles.outerScroll}>
                <div className="scrollWrapper" ref="scroll" style={{minHeight:'597px',}}>
                    <Carousel1/>
                    <FourProduct/>
                    <ProductsDetail/>
                </div>
            </div>

        )
    }
};

const styles = {
    outerScroll:{
        width:'100%',
        height:'100%',
        overflow:'hidden',
    }
}