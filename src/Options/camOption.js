import React, { Component } from 'react';
import {FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash} from "react-icons/fa";

export default class CamOption extends Component {

    constructor(props) {
        super(props);
        this.optionRef = React.createRef();
        this.switchAudio = this.switchAudio.bind(this);
        this.switchVideo = this.switchVideo.bind(this);
    }

    switchAudio(){
        const myStream = this.props.streamManager
        if(myStream.stream.audioActive){
            myStream.publishAudio(false);
            console.log("Off Audio Active !")
        } else{
            myStream.publishAudio(true);
            console.log("On Audio Active")
        }
        this.forceUpdate();
    }
    switchVideo() {
        const myStream = this.props.streamManager;
        if (myStream.stream.videoActive) {
            myStream.publishVideo(false);
            console.log("Video Off");
        } else {
            myStream.publishVideo(true);
            console.log("Video On");
        }
        this.forceUpdate();
    }

    render() {
        return (
            <div id="userOption">
                <button onClick={this.switchAudio}>
                    {this.props.streamManager.stream.audioActive ? <FaMicrophoneSlash size={24} /> : <FaMicrophone size={24} />}
                </button>
                <button onClick={this.switchVideo}>
                    {this.props.streamManager.stream.videoActive ? (
                        <FaVideoSlash size={24} />
                    ) : (
                        <FaVideo size={24} />
                    )}
                </button>
            </div>
        )
    }

}