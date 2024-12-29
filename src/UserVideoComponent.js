import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';
import CamOption from './Options/camOption'
import './UserVideo.css';
import {FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash} from "react-icons/fa";

export default class UserVideoComponent extends Component {

    getNicknameTag() {
        // Gets the nickName of the user
        return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
    }

    render() {
        return (
            <div>
                {this.props.streamManager !== undefined ? (
                    <>
                        <div className="streamcomponent">
                            <OpenViduVideoComponent streamManager={this.props.streamManager} />
                            <div><p>{this.getNicknameTag()}</p></div>
                        </div>
                        <div className="cam-footer">
                            <div id="userOption">
                                <button>
                                    {this.props.streamManager.stream.audioActive ?
                                        <FaMicrophone size={24} /> : <FaMicrophoneSlash size={24} />}
                                </button>
                                <button>
                                    {this.props.streamManager.stream.videoActive ? (
                                        <FaVideo size={24} />
                                    ) : (
                                        <FaVideoSlash size={24} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        );
    }
}
