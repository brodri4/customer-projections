import * as actionTypes from './actions/actionTypes'



const reducer = (state, action) => {

    if(action.type == 'ON_CHANGE') {
        return {
            ...state, 
            data: action.payload
        }
    }if(action.type == actionTypes.ON_STATE) {
        return {
            ...state, 
            data: action.payload 
        }
    }if(action.type == actionTypes.ON_FINAL) {
        return {
            ...state, 
            data: action.payload 
        }
    }

    return state
}

export default reducer 