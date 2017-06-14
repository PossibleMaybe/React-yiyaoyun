/**
 * Created by Administrator on 2017/6/12.
 */
import React,{Component} from 'react';
import { Badge } from 'antd-mobile';

import { NavBar, Icon } from 'antd-mobile';
import pic from './../images/cart.png'
console.log(Icon);
export default class NavBar1 extends Component {

    jumpToShopCart(){
        window.location.hash= '#/shopcart'
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


                                <Badge  text={101} overflowCount={99} size='small'
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

