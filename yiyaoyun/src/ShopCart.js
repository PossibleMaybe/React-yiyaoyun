/**
 * Created by Administrator on 2017/6/14.
 */
import React,{Component} from 'react';
import ShopNavBar from './Components/shopNavBar';
export default class ShopCart extends Component {
    render(){
        return(
            <div style={styles.whole}>
               <ShopNavBar/>
            </div>
        )
    }
}
const styles = {
    whole:{
        width:'100%',
        height:'100%',
    }
}