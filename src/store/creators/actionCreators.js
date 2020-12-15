import * as actionTypes from '../actions/actionTypes'


export const onLogin = (data) => {
    
    return (dispatch) => {
        dispatch({type: actionTypes.ON_CHANGE, payload:data})
    }
}
