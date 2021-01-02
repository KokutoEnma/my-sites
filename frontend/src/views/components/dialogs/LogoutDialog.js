import Dialog from 'components/Dialog/Dialog'
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

export default function LogoutDialog(props) {


    return (
        <Dialog
            header={
                <Typography variant="subtitle1" gutterBottom align='center'>
                    Sign Out?
                </Typography>
            }
            open={props.open}
            actions={[

                {
                    name: 'Sign Out', action: () => {
                        axios.post('/api/auth/logout/').then(e => {
                            props.setOpen(false)
                            window.location.reload()
                        })

                    }
                },
                { name: 'Cancel', action: () => props.setOpen(false) }
            ]}
            content={
                <Typography variant="body2" gutterBottom align='center'>
                    Are You sure to Sign out?
                </Typography>
            } />
    )
}