import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchblogListAction } from 'store/reducers/blogReducer'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { motion } from 'framer-motion'
import JsxParser from 'react-jsx-parser'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: 64
    },
    item: {
        width: '64vw',
        marginTop: '16px',
        minHeight: '32px',
        maxHeight: '194px',
        overflow: 'hidden'
    },
    title: {
        borderBottom: 'black solid 1px'
    },
    body: {
        marginTop: '32px'
    }
}))

export default function BlogListSection() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const { blogList, loaded } = useSelector(state => state.blog)


    useEffect(() => {
        const createBlogList = bloglist => dispatch(fetchblogListAction(bloglist))
        const fetch = async () => {
            const result = await axios.get(`/api/blog/bloglist/`)
            createBlogList(result.data.blogList)
        }
        if (loaded === false) {
            fetch()
        }
    }, [dispatch, loaded])

    return (
        <Grid container justify='center' className={classes.root} >
            <Grid item>
                <motion.div
                    animate='show'
                    initial='hidden'
                    transition={{ staggerChildren: 0.2 }}
                    varients={{
                        show: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}
                    style={{ width: '100%' }}
                    className={classes.body}
                >
                    {blogList.map((item, i) => (
                        <motion.div
                            variants={{
                                show: { y: 0, opacity: 1 },
                                hidden: { y: 100, opacity: 0 }
                            }}
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ transition: 'all 0.3s', marginTop: '24px' }}
                        >
                            <Link key={i} style={{ color: 'block' }} to={`/blog/${item.unique_id}`}>
                                <Paper variant="outlined" className={classes.item}>
                                    <Typography variant="subtitle1" align='center' >
                                        {item.subject}
                                    </Typography>
                                    <Typography variant="subtitle1" align='left' className={classes.title}>
                                        created by: {item.owner}
                                        <Typography style={{ float: 'right' }} variant="body1" align='right' >
                                            {item.created_time}
                                        </Typography>
                                    </Typography>
                                    <Description description={item.description} />

                                </Paper>
                            </Link>
                        </motion.div>
                    ))}

                </motion.div>
            </Grid>
        </ Grid>
    )
}

const Description = props => {
    const classes = useStyles()
    return (
        <div className={classes.body}>
            {
                props.description.map((item, key) => {
                    if (item === "") return <br key={key}></br>
                    else {
                        return <JsxParser jsx={item} key={key} />
                    }
                })
            }
        </div>
    )
}
