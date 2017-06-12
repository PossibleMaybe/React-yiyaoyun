/**
 * Created by yongchunwu on 2017/6/9.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
export default class TabBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="tabBar" style={styles.tabBar}>
                <div className="index item" style={styles.index}>
                    <Link to="/" params={{id:2}}>首页</Link>
                </div>
                <div className="shopCart item" style={styles.item}>
                    <Link to="/products" params={{id:1}}>购物车</Link>
                </div>
                <div className="myCenter item" style={styles.item}>
                    <Link to="/">我的</Link>
                </div>
            </div>
        )
    }
}

const styles = {
    tabBar:{
        display:'flex',
        flexDirection:'row',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
    },
    index:{
        flex:'1',
        height:'100%',
        lineHeight:'44px',
    },
    item:{
        flex:'1',
        borderLeft:'1px solid #eee',
        height:'100%',
        lineHeight:'44px',
    }

}