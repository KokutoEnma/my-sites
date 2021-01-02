
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button";
import axios from 'axios';
import { urls } from 'utils/config'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(() => ({
    root: {
    },
    root2: {
        marginTop: 128
    },
    root3: {
        marginTop: 32
    },
    editor: {
        width: '70%',
        border: 'black solid 1px',
    },
    input: {
        width: '70%'
    },
    bottom: {
        width: '70%',
        marginTop: '64px'
    }

}))
export default function NewBlogScreen() {

    const classes = useStyles()
    const [editData, setEditData] = useState('')
    const [subject, setSubject] = useState('')
    const profile = useSelector(state => state.profile.profile)
    const history = useHistory()
    return (
        <>
            <Grid container className={classes.root} justify='center'>
                <Grid container justify='center' className={classes.root2}>
                    <Typography variant="h4" gutterBottom align='center' className={classes.text}>
                        Subject
                    </Typography>
                    <Grid container justify='center'>
                        <TextField
                            className={classes.input}
                            label={'Enter Subject'}
                            type="name"
                            variant="outlined"
                            size="small"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        />
                    </Grid>

                </Grid>

                <Grid container justify='center' className={classes.root3}>
                    <Typography variant="h4" gutterBottom align='center' className={classes.text}>
                        body
                    </Typography>
                </Grid>
                <Grid container justify='center'>
                    <Grid item id='toolbar-container' className={classes.editor} style={{ borderBottom: 'none' }}>
                    </Grid>
                    <Grid item className={classes.editor}>
                        <CKEditor
                            editor={DecoupledEditor}
                            data={editData}
                            onReady={editor => {
                                // Add the toolbar to the container
                                const toolbarContainer = document.querySelector('#toolbar-container');
                                toolbarContainer.appendChild(editor.ui.view.toolbar.element);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setEditData(data)
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container justify='flex-end' className={classes.bottom}>
                    <Button color='info' onClick={() => {
                        axios.post(`http://${urls.backend}/api/blog/newblog/`, {
                            blog: {
                                subject: subject,
                                description: editData,
                                username: profile.username
                            }
                        }).then(res => {
                            if (res.data.error === false) history.push('/blog')
                        })
                    }}>
                        Submit
                    </Button>
                </Grid>
            </Grid>

        </>
    )
}