import * as actions from '../actions/actionTypes'

const initialState = {
    loading: false,
    photos: [],
    error: ''
}

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_PHOTO_REQUEST:
            return {
                ...state,
                loading: false
            }

        case actions.FETCH_PHOTO_SUCCESS:
            return {
                loading: false,
                photos: action.payload,
                error: ''
            }

        case actions.FETCH_USERS_FAILURE:
            return {
                loading: false,
                photos: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default photoReducer