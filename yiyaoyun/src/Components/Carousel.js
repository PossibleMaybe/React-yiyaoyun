/**
 *
 * Created by Administrator on 2017/6/9.
 */
import React,{Component} from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Carousel1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: ['', '', ''],
            initialHeight: 200,
        }
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (
            <WingBlank>
                <div className="sub-title">normal</div>
                <Carousel
                    className="my-carousel"
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={35}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(ii => (
                        <a href="http://www.baidu.com" key={ii} style={hProp}>
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                                alt="icon"
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({
                                        initialHeight: null,
                                    });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

                <WhiteSpace />
                <div className="sub-title">vertical</div>
                <Carousel className="my-carousel"
                          vertical
                          dots={false}
                          dragging={false}
                          swiping={false}
                          autoplay
                          infinite
                >
                    <div className="v-item">Carousel 1</div>
                    <div className="v-item">Carousel 2</div>
                    <div className="v-item">Carousel 3</div>
                </Carousel>

                <WhiteSpace />
                <div className="sub-title">lottery</div>
                <Carousel className="my-carousel"
                          vertical
                          dots={false}
                          dragging={false}
                          swiping={false}
                          autoplay
                          infinite
                          speed={200}
                          autoplayInterval={300}
                          resetAutoplay={false}
                >
                    {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(it => (
                        <div className="v-item">{it}</div>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}





