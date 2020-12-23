import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

class ChatDisplay extends React.Component {

    scrollbar = React.createRef()
    render() {
        return (

            <Scrollbars ref={this.scrollbar}
                style={{ borderBottom: "black solid 1px", height: '80%', marginTop: '24px', width: "90%", marginLeft: "5%" }}
                renderThumbHorizontal={props => <div {...props} className="thumb" />}
                renderThumbVertical={props => <div {...props} className="thumb" />}
            >
                {
                    this.props.chatHistory.map((e, i) =>
                        <p key={i}>{e.username + ":" + e.message}</p>
                    )
                }


            </Scrollbars>

        )
    }
}

export default ChatDisplay