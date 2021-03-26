import Grid from '@material-ui/core/Grid';
import { useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars'


import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
        backgroundColor: 'lightgreen',
        height: 'calc(100% - 32px - 48px - 64px)',
        borderBottom: 'gray solid 1px'
    },
    item: {
        height: 64,
        overflow: 'hidden'
    }
})


export default function ChatDisplay() {
    const classes = useStyles()
    const scrollbar = useRef(null)
    const list = [
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },

        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
        { name: 'aefaw', message: 'fwafwe' },
    ]
    return (
        <Grid container className={classes.root}>
            <Scrollbars ref={scrollbar}
                style={{ height: '100%', width: "100%" }}
                renderThumbHorizontal={props => <div {...props} className="thumb" />}
                renderThumbVertical={props => <div {...props} className="thumb" />}
            >
                {
                    list.map((item, key) => (
                        <div key={key} className={classes.item}>
                            {item.name}:{item.message}
                        </div>
                    ))
                }
            </Scrollbars>
        </Grid>
    )
}