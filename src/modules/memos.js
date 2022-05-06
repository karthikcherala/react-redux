//actions
import {v4} from "uuid";

export const LOGIN = 'memos/LOGIN'
export const LOGOUT = 'memos/LOGOUT'
export const ADD_MEMO = 'memos/ADD_MEMO'
export const APPLY_ADD_MEMO = 'memos/APPLY_ADD_MEMO'
export const CANCEL_ADD_MEMO = 'memos/CANCEL_ADD_MEMO'
export const DELETE_MEMO = 'memos/DELETE_MEMO'
export const EDIT_MEMO = 'memos/EDIT_MEMO'
export const APPLY_EDIT_MEMO = 'memos/APPLY_EDIT_MEMO'
export const CANCEL_EDIT_MEMO = 'memos/CANCEL_EDIT_MEMO'

// a reducer is a function that transitions the current state
//    to the next, given an action

// given a door. it is currently closed.
// If you apply the OPEN action
// the reducer will set the door's state to open.
// If you apply the CLOSE action
// the reducer will set the door's state to closed.
const initialState = {
    isLoggedIn: false,
    memos: [],
    memoToEdit: null,
    memoToAdd: null
}

export default function reducer(state = initialState, action) {
    switch (action?.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: action.credentials.username === 'ubatta' &&
                    action.credentials.password === 'mypass'
            }

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }

        case ADD_MEMO:
            const now = new Date()
            now.setTime(0)
            return {
                ...state,
                memoToAdd: {title: '', date: now, description: '', complete: false}
            }

        case CANCEL_ADD_MEMO:
            return {
                ...state,
                memoToAdd: null
            }

        case APPLY_ADD_MEMO:
            return {
                ...state,
                memos: [...state.memos, {...action.memo, id: v4()}],
                memoToAdd: null
            }

        case DELETE_MEMO:
            return {
                ...state,
                memos: state.memos.filter(memo => memo.id !== action.id)
            }

        case EDIT_MEMO:
            return {
                ...state,
                memoToEdit: action.memo
            }

        case APPLY_EDIT_MEMO:
            return {
                ...state,
                memos: state.memos.map(memo => memo.id === state.memoToEdit.id ? state.memoToEdit : memo),
                memoToEdit: null
            }

        case CANCEL_EDIT_MEMO:
            return {
                ...state,
                memoToEdit: null
            }

        default:
            return state
    }
}