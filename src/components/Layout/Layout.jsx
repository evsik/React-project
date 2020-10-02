import './style.css';
import React, {Component, Fragment} from 'react';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import PropTypes from 'prop-types'

import Head from '../Head/Head.jsx';
import MessageField from '../MessageField/MessageField.jsx';
import Chat from "../Chat/Chat.jsx";


export default class Layout extends Component {

    static propTypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: 1
    }

    render() {
        // let { some } = this.state;

        return (
            <StylesProvider>
                <div className="main">
                    <Head/>
                    <div className="d-flex justify-content-around">
                        <Chat id={this.props.chatId}/>
                        <MessageField/>
                    </div>
                </div>
            </StylesProvider>
        )
    }
}
    