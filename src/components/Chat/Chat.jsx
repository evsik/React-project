import './style.css';
import React, {Component, Fragment} from 'react';
import {link} from 'react-router-dom';
import ChatsDialog from "../ChatsDialog/ChatsDialog.jsx";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }

    render() {
        // let { some } = this.state;

        return (
            <Fragment>
                <div className="chatList d-flex flex-column">
                    {/*{chat-list}*/}
                    <div>
                        <ChatsDialog/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
    