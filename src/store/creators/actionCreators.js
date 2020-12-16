import * as actionTypes from '../actions/actionTypes'


export const onLogin = (data) => {
    
    return (dispatch) => {
        dispatch({type: actionTypes.ON_CHANGE, payload:data})
    }
}

export const onState = (data) => {
    return (dispatch) => {
        fetch('http://localhost:8080/', {
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
        fetch('http://localhost:8080/final', {
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