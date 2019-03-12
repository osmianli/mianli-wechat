import React, {Component} from 'react';
import {Carousel, WingBlank, Flex, Grid} from 'antd-mobile';

import BottomBar from '../component/bottomTab.comp';
import CardItem from '../component/cardItem.comp';

/**
 *
 */
class EnrollList extends Component {

    constructor (props){
        super(props);
    }

    state = {
        data: ['1', '2', '3'],
        imgHeight: 120,
    };

    componentDidMount () {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }


    render () {

        const data = Array.from(new Array(3)).map((_val, i) => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: `训练营`,
        }));
        return (
            <div className="enroll-list p-b-xxl">
      	 <div className="p-t">
	      	 <WingBlank>
		        <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
		          {this.state.data.map(val => (
                      <div
                          key={val}
                          style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                      >
		              <img
                          src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                          alt=""
                          style={{width: '100%', verticalAlign: 'top'}}
                          onLoad={() => {
                              // fire window resize event to change height
                              window.dispatchEvent(new Event('resize'));
                              this.setState({imgHeight: 'auto'});
                          }}
                      />
		            </div>
                  ))}
		        </Carousel>
		      </WingBlank>
      	 </div>

         <WingBlank>
            <Grid data={data} columnNum={3}/>
         </WingBlank>

      	 <WingBlank>
      	 	<h4 className="m-b-xs">大家都在看</h4>
			<Flex>
				<Flex.Item>
                    <CardItem/>
                </Flex.Item>
      			<Flex.Item>
                    <CardItem/>
                </Flex.Item>
			</Flex>
             <div className="p-t"></div>
             <Flex>
				<Flex.Item>
                    <CardItem/>
                </Flex.Item>
      			<Flex.Item>
                    <CardItem/>
                </Flex.Item>
			</Flex>
              <div className="p-t"></div>
             <Flex>
				<Flex.Item>
                    <CardItem/>
                </Flex.Item>
      			<Flex.Item>
                    <CardItem/>
                </Flex.Item>
			</Flex>
      	 </WingBlank>

      	 <BottomBar history={this.props.history}></BottomBar>
      </div>
        );
    }
}

export default EnrollList;
