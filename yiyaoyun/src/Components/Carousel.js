/**
 *
 * Created by Administrator on 2017/6/9.
 */
import React,{Component} from 'react';

import {strEnc,GLOBAL_URL} from './../config/des';

import {source,insureCode} from './../config/config';

import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

import './../css/carousel.css';

export default class Carousel1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            bannerImg:[],

        }
    }

    componentDidMount() {
        // simulate img loading
        var enResult = strEnc('[{"yyyCode":"100990","source":"' + source + '"}]', "100001", "", "");

        fetch(GLOBAL_URL+'?json='+enResult)
            .then(response => response.json())
            .then(responseData =>{console.log(responseData);this.setState({
                bannerImg:responseData.data,
            })})

    }
    render() {
        return (
            <div className="carousel">
                <Carousel
                    className="myCarousel"
                    style={styles.myCarousel}
                    autoplay={true}
                    infinite
                    selectedIndex={0}
                    swipeSpeed={35}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.bannerImg.map((ii,index) => {

                            return (<img
                                className="carouselImg"
                                style={styles.myCarousel}
                                key={index}
                                src={ii.BannerImage}
                                alt="icon"
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({
                                        initialHeight: null,
                                    });
                                }}
                            />)
                    })}
                </Carousel>
            </div>
        );
    }
}
var styles = {
    myCarousel:{
        width:'100%',
        height:'200px',
    },
    carouselImg:{
        width:'100%',
        height:'188px',
    }
}




