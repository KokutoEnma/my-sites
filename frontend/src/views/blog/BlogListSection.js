import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchblogListAction } from 'store/reducers/blogReducer'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { motion } from 'framer-motion'
import SingleBlog from './SingleBlog'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: 64
    },
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
                                <SingleBlog item={item} style={{ maxHeight: '128px' }} />
                            </Link>
                        </motion.div>
                    ))}

                </motion.div>
            </Grid>
        </ Grid>
    )
}


