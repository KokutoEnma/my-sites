
import { CREATE_PROFILE, DELETE_PROFILE } from '../actions'

const initialState = {
    loaded: false,
    profile: null
}

export default function reducers(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_PROFILE:
            return {
                loaded: true,
                profile: payload
            }
        case DELETE_PROFILE:
            return {
                loaded: true,
                profile: null
            }
        default:
            return { ...state }
    }
}


export const createProfileAction = profile => ({
    type: CREATE_PROFILE,
    payload: profile
})

export const deleteProfileAction = () => ({
    type: DELETE_PROFILE,
})