
import { CREATE_CHAT, EDIT_CHAT } from '../actions'

const initialState = {
    loaded: false,
    chatList: []
}

export default function reducers(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_CHAT:
            return {
                loaded: true,
                chatList: payload
            }
        case EDIT_CHAT:
            return {
                loaded: true,
                chatList: payload
            }
        default:
            return { ...state }
    }
}

export const createChatAction = chatList => ({
    type: CREATE_CHAT,
    payload: chatList
})

export const deleteChatAction = chatList => ({
    type: EDIT_CHAT,
    payload: chatList
})