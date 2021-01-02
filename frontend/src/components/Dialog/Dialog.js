import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from 'components/CustomButtons/Button'
import Grid from '@material-ui/core/Grid';
class BetterDialog extends React.Component {

    render() {

        const { open, maxWidth, fullWidth, style, header, content, actions } = this.props

        return (
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={maxWidth}
                fullWidth={fullWidth}
                style={style}
            >
                <Grid style={{ marginTop: 64, marginBottom: 32 }} >
                    {header}
                </Grid>
                <DialogContent>
                    {content}
                </DialogContent>
                <DialogActions>
                    {
                        actions && actions.map((action, index) => (
                            <Button color="info" onClick={() => action.action()} key={index}>
                                {action.name}
                            </Button>
                        ))
                    }
                </DialogActions>
            </Dialog>

        )
    }

}

export default BetterDialog;