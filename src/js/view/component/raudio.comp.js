import React, {Component} from "react";
import PropTypes from 'prop-types';
import {observer} from "mobx-react";
import ReactPlayer from 'react-player';

import '../../../style/component/range.scss';
import '../../../style/component/audio.scss';

/**
 * 深度封装 react-player
 *   @function   加快速度和减慢速度的功能
 *   @function2  音频样式可定制
 */
@observer
class RAudioPlayer extends Component {

    state = {
        played: 0,
        loaded: 0,
        loadedSeconds: 0,
        playedSeconds: 0,
        duration:0,
        seeking: false,
        playing: false,
        playbackRate: 1
    };


    format = (seconds) => {
        const date = new Date(seconds * 1000)
        const hh = date.getUTCHours()
        const mm = date.getUTCMinutes()
        const ss = this.pad(date.getUTCSeconds())
        if (hh) {
            return `${hh}:${this.pad(mm)}:${ss}`
        }
        return `${mm}:${ss}`
    }

    pad = (string) => {
        return ('0' + string).slice(-2)
    }

    constructor (props) {
        super(props);
        const {src, playbackRate} = this.props;
        //视频地址
        this.src = src;
        this.state.playbackRate = playbackRate;
    }

    playPause = () => {
        this.setState({playing: !this.state.playing})
    };

    seekChange = (name) => {
        return (value) => {
            console.log(`${name}: ${value}`);
            // this.player.seekTo(value/100);
            this.player.seekTo(parseFloat(value / 100));
        }
    };
    setPlaybackRate = (rate) => {
        // this.playbackRate = rate;
        this.setState({playbackRate: rate});
    };
    onSeekMouseDown = e => {
        console.log('down');
    };
    onSeekChange = e => {
        console.log('change', e.target.value);
        this.setState({played: parseFloat(e.target.value)})
    };
    onSeekMouseUp = e => {
        console.log('up', e.target.value);
    };
    onItemTouchStart = e => {
        this.setState({seeking: true})
    };
    onItemTouchEnd = e => {
        console.log('end', e.target.value);
        this.setState({seeking: false})
        this.player.seekTo(parseFloat(e.target.value))
    };
    onDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({duration})
    };
    onProgress = (state) => {
        console.log('onProgress', state);
        if (!this.state.seeking) {
            this.setState(state)
        }
    };
    ref = (player) => {
        this.player = player
    };

    render () {
        return (
            <div style={{height: "120px"}}>
                <ReactPlayer
                    url={this.src}
                    ref={this.ref}
                    onDuration={this.onDuration}
                    onProgress={this.onProgress}
                    controls
                    playbackRate={this.state.playbackRate}
                    playing={this.state.playing}
                    width="100%"
                    height="60px"
                    className='react-player'
                />

                <div className="audio-wrap">
                    <div className="audio-process">
                        <div className="icon-bg" onClick={() => {this.playPause()}}>
                        </div>
                        <div className="audio-range">
                            <input
                                type='range' min={0} max={1} step='any'
                                value={this.state.played}
                                onMouseDown={this.onSeekMouseDown}
                                onChange={this.onSeekChange}
                                onMouseUp={this.onSeekMouseUp}
                                onTouchStart={this.onItemTouchStart}
                                onTouchEnd={this.onItemTouchEnd}
                            />
                            <label>{this.format(this.state.duration * this.state.played)}</label>
                            <label className="float-right">{this.format(this.state.duration)}</label>
                        </div>
                    </div>

                    <div class="line p-t-xs p-b-xs"></div>

                    <div className="audio-rate-btns m-t-xs">
                        <button onClick={() => {this.setPlaybackRate(0.75)}}>x0.75</button>
                        <button onClick={() => {this.setPlaybackRate(1)}}>x1.0</button>
                        <button onClick={() => {this.setPlaybackRate(1.5)}}>X1.5</button>
                        <button onClick={() => {this.setPlaybackRate(2)}}>X2.0</button>

                        <button className="float-right p-r-xs">倍速:{this.state.playbackRate}</button>
                    </div>
                </div>
            </div>
        );
    }
}

RAudioPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    playbackRate: PropTypes.number
};

export default RAudioPlayer;