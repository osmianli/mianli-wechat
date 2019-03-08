import { observable, action } from "mobx";
import DateUtil from "../../util/date.util";

/**
 * Audio component date store
 */
export default class AudioItem {
    @observable
    duration = "00:00";
    @observable
    current = "00:00";
    @observable
    isPlaying = false;

    constructor() {
    }

    @action
    setDuration = (duration) => {
        this.duration = DateUtil.formatAudioTimer(duration);
    };

    @action
    setCurrent = (current) => {
        this.current = DateUtil.formatAudioTimer(current);
    };

    @action
    setIsPlaying = (isPlaying) => {
        this.isPlaying = isPlaying === true;
    };
}