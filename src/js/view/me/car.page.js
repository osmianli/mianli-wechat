import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Button, WhiteSpace,Toast } from 'antd-mobile';

import AudioPlayer from '../component/audio.comp';
import VideoPlayer from '../component/vedio.comp';
import RAudioPlayer from '../component/raudio.comp';

/**
 * The defined component test page
 *
 *  001. Audio
 *
 */
@inject("User", "Audio") @observer
class Car extends Component {

  render() {
    const { Audio } = this.props;

    const showToaster = (msg) =>{
      Toast.info(msg,1);
    }
    return (
      <div className="car m-t p-l p-r">
        <h3>01.变速音频插件</h3>
        <RAudioPlayer className="w-full" playbackRate={1} src="http://qiniuprivate.gambition.cn/1550923925984_Zd9Dze_Day 14 视译示范.mp3"/>
        <h3>02.视频插件</h3>
        <VideoPlayer src="http://qiniuprivate.gambition.cn/1550913170867_cEHigj_con_voiceless_3 tʃ.mp4"/>
        <h3>03.单词卡片</h3>
        <label htmlFor=""> Add a vocabulary card</label>

      </div>
    );
  }
}

export default Car;
