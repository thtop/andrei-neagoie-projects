import { 
    CHANGE_SEARCH_FIELD,
    RQUEST_ROBOTS_PENDING,
    RQUEST_ROBOTS_SUCCESS,
    RQUEST_ROBOTS_FAILED
} from './constants'

export const setSearchField = text => ({type: CHANGE_SEARCH_FIELD, payload: text })


export const requestRobots = () => dispatch => {
    dispatch({ type: RQUEST_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: RQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: RQUEST_ROBOTS_FAILED, payload: error}))
}
     