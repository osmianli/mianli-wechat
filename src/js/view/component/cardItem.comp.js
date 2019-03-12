import React, { Component } from "react";
import { Tag } from 'antd-mobile';

import '../../../style/component/card-item.scss';

class CardItem extends  Component{

    /**
     * Define a card for course
     */
    render() {
        return (
            <div className="card-item">
                <img className="card-img" src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png" alt=""/>
                <div>
                    手风琴训练营
                </div>
                <div className="p-t-xs">
                    <Tag small>Selected</Tag>
                    <span className="float-right">
                        免费
                    </span>
                </div>
            </div>
        );
    }
}


export default CardItem;