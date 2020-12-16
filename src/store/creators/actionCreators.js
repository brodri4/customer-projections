import * as actionTypes from '../actions/actionTypes'


export const onLogin = (data) => {
    
    return (dispatch) => {
        dispatch({type: actionTypes.ON_CHANGE, payload:data})
    }
}

export const onState = (data) => {
    return (dispatch) => {
        fetch('https://boris-customer-api.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data:data})
        }).then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.ON_STATE, payload: result})
        })
    }

}

export const onFinal = (data) => {
    return (dispatch) => {
        fetch('https://boris-customer-api.herokuapp.com/final', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data:data})
        }).then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.ON_FINAL, payload: result})
        })
    }

}