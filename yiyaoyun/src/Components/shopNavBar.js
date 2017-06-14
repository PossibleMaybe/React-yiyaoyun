/**
 * Created by Administrator on 2017/6/14.
 */
import React,{Component} from 'react';
import {NavBar,Icon} from 'antd-mobile';


export default class ShopNavBar extends Component {
    render(){
        return(
            <div className="shopNavbar" style={styles.navBar}>
                <NavBar leftContent="back"
                        style={styles.navBar}
                        mode="light"
                        onLeftClick={() => {window.history.go(-1)}}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,

                        ]}
                >购物车</NavBar>
            </div>
        )
    }
}

const styles = {
    navBar:{
        width:'100%',
        height:'44px',
        backgroundColor:'green',
    },

}