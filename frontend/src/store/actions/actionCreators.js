import * as actionTypes from './actionTypes';
import axios from 'axios';

export const saveResult = (payload) => {
    return {
        type: actionTypes.ASYNC_CODE,
        payload: payload
    }
}

export const actionCreatorAsyncCode = (payload) => {
    console.log(payload);
    return dispatch => {
        axios.post('http://assesmenttasks.northeurope.cloudapp.azure.com/compile', {
        language: payload.id,
        code: payload.code
    }).then((response) => {
            dispatch(saveResult({ response: response, taskName: payload.taskName, technology: payload.technology }));
          }, (error) => {
            console.log(error);
          });
    }
}