import React, { Component } from 'react';
import {FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash} from "react-icons/fa";

export default class CamOption extends Component {

    constructor(props) {
        super(props);
        this.optionRef = React.createRef();
    }

    render() {
        return (
            <div id="userOption">
                <button onClick={this.props.switchAudio}>
                    {this.props.streamManager.stream.audioActive ?
                        <FaMicrophoneSlash size={24} /> : <FaMicrophone size={24} />}
                </button>
                <button onClick={this.props.switchVideo}>
                    {this.props.streamManager.stream.videoActive ?
                        <FaVideoSlash size={24} /> : <FaVideo size={24} />}
                </button>
            </div>
        )
    }

}