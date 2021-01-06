import { ADD_BLOG, FETCH_BLOGLIST, DELETE_BLOG } from '../actions'

const initialState = {
    blogList: [],
    loaded: false
}

export default function reducers(state = initialState, { type, payload }) {
    if (type === FETCH_BLOGLIST) {
        return {
            blogList: payload,
            loaded: true
        }
    }
    else if (type === ADD_BLOG) {
        let blogList = [...state.blogList]
        blogList.push(payload)
        return {
            ...state,
            blogList,
        }
    } else if (type === DELETE_BLOG) {
        let blogList = state.blogList.filter(e => e.id !== payload)
        return {
            blogList,
            loaded: true
        }
    } else {
        return { ...state }
    }
}


export const addBlogAction = blog => ({
    type: ADD_BLOG,
    payload: blog
})

export const deleteBlogAction = id => ({
    type: DELETE_BLOG,
    payload: id
})


export const fetchblogListAction = bloglist => ({
    type: FETCH_BLOGLIST,
    payload: bloglist
})