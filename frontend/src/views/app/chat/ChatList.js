import { useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars'
import { useSelector } from 'react-redux'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    item: {
        height: 64,
        overflow: 'hidden',
        borderBottom: 'black solid 1px'
    }
})

export default function ChatList() {
    const classes = useStyles()
    const scrollbar = useRef(null)
    const { chatList } = useSelector(state => state.chat)
    let list = []
    for (let i in chatList) list.push(i)
    return (
        <Scrollbars ref={scrollbar}
            style={{ height: '100%', width: "100%" }}
            renderThumbHorizontal={props => <div {...props} className="thumb" />}
            renderThumbVertical={props => <div {...props} className="thumb" />}
        >
            {
                list.map((item, key) => (
                    <div key={key} className={classes.item}>
                        {item}
                    </div>
                ))
            }
        </Scrollbars>
    )
}