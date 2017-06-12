/**
 * Created by Administrator on 2017/6/12.
 */
import React,{Component} from 'react';

import { NavBar, Icon } from 'antd-mobile';
console.log(Icon);
export default class NavBar1 extends Component {
    render (){
        return (
            <div className="navbar">
                <NavBar leftContent="back"
                        style={styles.navBar}
                        mode="light"
                        onLeftClick={() => {window.history.go(-1)}}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                >商品详情</NavBar>
            </div>
        )
    }
}

const styles= {
    navBar:{
        backgroundColor:'green',
    }
}

