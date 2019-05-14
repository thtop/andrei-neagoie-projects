import { 
    CHANGE_SEARCH_FIELD,
    RQUEST_ROBOTS_PENDING,
    RQUEST_ROBOTS_SUCCESS,
    RQUEST_ROBOTS_FAILED
} from '../actions/constants'

const intialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=intialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state
    }
}

const intialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=intialStateRobots, action={}) => {
    switch(action.type) {
        case RQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case RQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false})
        case RQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state
    }
}