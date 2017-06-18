/**
 * Created by Administrator on 2017/6/12.
 */
import React,{Component} from 'react';
import { Badge } from 'antd-mobile';

import { NavBar, Icon } from 'antd-mobile';
import pic from './../images/cart.png'
import {store} from './../redux/stores/store';
console.log(Icon);
export default class NavBar1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            addCartNum:0
        }
    }
    jumpToShopCart(){
        window.location.hash= '#/shopcart'
    }
    componentDidMount(){


    }
    render (){
        return (
            <div className="navbar">
                <NavBar leftContent="back"
                        style={styles.navBar}
                        mode="light"
                        onLeftClick={() => {window.history.go(-1)}}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                            <div style={{position:'relative',}} onClick={this.jumpToShopCart}>
                                <img style={styles.pic} src={pic} />


                                <Badge  text={this.props.num ===0 ?'0':this.props.num} overflowCount={99} size='small'
                                    style={{borderRadius:'20px',position:'relative',top:0,right:0,fontSize:'8px'}}
                                />
                            </div>,
                        ]}
                >商品详情</NavBar>
            </div>
        )
    }
}

const styles= {
    navBar:{
        backgroundColor:'green',
    },
    pic:{
        zoom:0.5,
    }
}

