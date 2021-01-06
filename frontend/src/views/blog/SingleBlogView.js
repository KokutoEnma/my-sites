
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SingleBlog from './SingleBlog'
import { useState } from 'react'
import { addBlogAction } from 'store/reducers/blogReducer'
import { urls } from 'utils/config'


const useStyles = makeStyles(() => ({
    root: {
        marginTop: 128,
        marginBottom: 128
    }
}))

export default function SingleBlogView() {
    const classes = useStyles()
    const params = useParams()
    const { key } = params;
    const { blogList } = useSelector(state => state.blog);
    const dispatch = useDispatch();
    const addBlog = blog => dispatch(addBlogAction(blog))

    const tmpBlog = blogList.find(e => e.unique_id === key)
    const [blog, setBlog] = useState(tmpBlog)
    const [error, setError] = useState(false)
    if (blog === undefined) {
        axios.post(`http://${urls.backend}/api/blog/getblog/`, { key: key }).then(res => {
            if (res.data.error === true) setError(res.data.message)
            else {
                setBlog(res.data.blog)
                addBlog(res.data.blog)
            }
        })
    }
    return (
        <Grid container>
            <Grid container className={classes.root} justify='center'>
                {
                    error === false ?
                        blog === undefined ? 'loading' :
                            <SingleBlog item={blog} /> : error
                }
            </Grid>
        </Grid>
    )
}