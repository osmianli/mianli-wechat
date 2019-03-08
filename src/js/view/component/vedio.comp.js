import React, {Component} from "react";
import PropTypes from 'prop-types';
import {observer} from "mobx-react";
import { Player } from 'video-react';

/**
 * 视频地址编辑器
 *  @目前视频仅仅可以可以播放，并没有各种好的体验
 */
@observer
class VideoPlayer extends Component{

    constructor (props) {
        super(props);
        const {src} = this.props;
        //视频地址
        this.src = src;
    }

    render(){
        return (
            <Player>
                 <source src={this.src} />
            </Player>
        );
    }
}

/**
 * 自定义视频参数
 */
VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
};

export default VideoPlayer;