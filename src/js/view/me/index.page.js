import React, { Component } from 'react';
import {  List,Badge } from 'antd-mobile';

import {ME_IMG} from "../../common/img";

import BottomBar from '../component/bottomTab.comp';

class MeIndex extends Component {

    constructor (props){
        super(props);
    }
    render() {
        return (
            <div className="me-index">
                <List>
                    <List.Item  arrow="horizontal" className="p-t p-b">
                      <Badge>
                        <span className="round" style={{ width: '50px', height: '50px', background: '#ddd', display: 'inline-block' }} />
                      </Badge>
                      <span style={{ marginLeft: 12 }}>郭老板</span>
                    </List.Item>
                </List>
                <List className="m-t">
                    <List.Item
                        thumb={ME_IMG.GROUP_COURSE_IMG}
                        extra={<Badge text={77} overflowCount={55} />}
                        arrow="horizontal"
                        className="p-t-sm p-b-sm"
                    >
                        我的拼课
                    </List.Item>
                    <List.Item
                        thumb={ME_IMG.TRANING_COURSE_IMG}
                        extra={<Badge text={77} overflowCount={55} />}
                        arrow="horizontal"
                        className="p-t-sm p-b-sm"
                    >
                      我的训练营
                    </List.Item>
                    <List.Item
                        thumb={ME_IMG.COIN_IMG}
                        arrow="horizontal"
                        className="p-t-sm p-b-sm"
                    >
                      我的友班币
                    </List.Item>
                    <List.Item
                        thumb={ME_IMG.COUPON_IMG}
                        extra={<Badge text={77} overflowCount={55} />}
                        arrow="horizontal"
                        className="p-t-sm p-b-sm"
                    >
                        我的优惠券
                    </List.Item>
                    <List.Item
                        thumb={ME_IMG.REDEEM_IMG}
                        arrow="horizontal"
                        className="p-t-sm p-b-sm"
                    >
                      课程兑换码
                    </List.Item>

                </List>
                 <List className="m-t">
                    <List.Item
                        thumb={ME_IMG.QUESTION_IMG}
                        arrow="horizontal"
                        className="p-t-sm p-b-sm"
                    >
                        咨询客服
                    </List.Item>

                </List>
                <BottomBar history={this.props.history}></BottomBar>
            </div>
        );
    }
}

export default MeIndex;
