import * as actionTypes from './actions/actionTypes'



const reducer = (state, action) => {

    if(action.type == 'ON_CHANGE') {
        return {
            ...state, 
            data: action.payload
        }
    }
    //  else if(action.type == actionTypes.FETCH_MOVIES) {
    //     return {
    //         ...state, 
    //         movies: action.payload 
    //     }
    // }

    return state
}

export default reducer 