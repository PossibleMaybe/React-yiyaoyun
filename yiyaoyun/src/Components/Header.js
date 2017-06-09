/**
 * Created by Administrator on 2017/6/9.
 */
import React,{Component} from 'react';

export default class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="header" style={styles.header}>
                <div>

                </div>
                <div className="title" style={styles.title}>
                    {this.props.title}
                </div>
                <div>

                </div>
            </div>
        )
    }
}

var styles = {
    header:{
        width:'100%',
        height:'44px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
    },
    title:{
        flex:1,
        textAlign:'center',
        lineHeight:'44px',
        color:'#fff',
    }
};