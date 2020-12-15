import React from 'react'
import Button from '@material-ui/core/Button';

class AppScreen extends React.Component {

    render() {
        return (
            <>
                AppScreen
                <Button variant="contained" onClick={()=>this.props.history.push('/app/chat')}>Chat</Button>

            </>
        )
    }
}

export default AppScreen