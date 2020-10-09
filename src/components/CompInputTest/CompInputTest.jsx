import './style.css';

import {TextField, FloatingActionButton} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import React, {Component} from 'react';

export default class InputComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }

    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'me') {
            this.setState({input: ''});
        }
    };

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({text: evt.target.value});
            // this.handleSendMessage(this.state.input, 'me');
        } else {
            this.props.send(this.state.text);
            this.setState({ text: '' });
        }
    }

    sendM = () => {
        this.props.send(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        let {text} = this.state;

        return (
            <div className="controls d-flex">
                <input
                    type="text"
                    value={text}
                    onChange={this.handleChange}
                    onKeyUp={this.handleChange}
                />
                <button onClick={this.sendM}>Send</button>
            </div>
        )
    }
}