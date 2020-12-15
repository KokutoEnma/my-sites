import React from 'react'
import { motion } from 'framer-motion';
import ChatDisplay from './ChatDisplay'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Socket from '../../utils/Socket';
import arrow from '../../images/right-arrow.png'


class ChatLobby extends React.Component {


    state = {
        selfName: "Anonymous",
        inputText: "",
        chatHistory: []
    }

    handleSendMessage = () => {
        this.socket.emit({
            username: this.state.selfName,
            msg: this.state.inputText
        })
        this.setState({ inputText: "" })
    }

    componentDidMount() {
        this.socket = new Socket('chat/lobby');
        this.socket.connect(e => console.log(e))
        this.socket.on(data => {
            let { chatHistory } = this.state
            chatHistory.push(data)
            this.setState(chatHistory)
        })
    }

    render() {
        return (
            <motion.div className="chat-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="chatroom-left">
                    <div className="chatlist-self-tag">
                        <TextField
                            className="chatlist-self-tag-input"
                            label="Enter Your Nick Name"
                            variant="outlined"
                            size="small"
                            value={this.state.selfName}
                            onChange={e => this.setState({ selfName: e.target.value })}
                            onMouseDown={() => this.setState({ selfName: this.state.selfName === "Anonymous" ? "" : this.state.selfName })}
                            onBlur={() => this.setState({ selfName: this.state.selfName === "" ? "Anonymous" : this.state.selfName })}
                        />
                    </div>
                </div>
                <div className="chatroom-right">
                    <ChatDisplay name={this.state.selfName} chatHistory={this.state.chatHistory} />
                    <TextField
                        className="chat-input"
                        label="Enter Message"
                        variant="outlined"
                        size="small"
                        value={this.state.inputText}
                        onMouseDown={e => e.stopPropagation()}
                        onChange={e => this.setState({ inputText: e.target.value })}
                        onFocus={() => {
                            window.onkeydown = e => {
                                if (e.keyCode === 13) this.handleSendMessage()
                            }
                        }}
                    />
                    <Button
                        className="chat-input-btn"
                        variant="contained"
                        color="primary"
                        disabled={this.state.inputText === ""}
                        onClick={this.handleSendMessage}
                    >
                        <img className="chat-input-btnico" src={arrow} alt='icon' />
                    </Button>
                </div>
            </motion.div>
        )
    }
}

export default ChatLobby