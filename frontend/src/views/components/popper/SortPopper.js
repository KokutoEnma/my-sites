import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Button from 'components/CustomButtons/Button'


export default function ProfilePopper(props) {

    return (
        <>
            <Popper open={props.open} anchorEl={props.anchorEl} placement={props.placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            {
                                props.actions.map((action, key) => (
                                    <div key={key} className='radius-btn'>
                                        <Button color='transparent' onClick={action.action} >
                                            {action.name}
                                        </Button>
                                    </div>

                                ))
                            }
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    )
}