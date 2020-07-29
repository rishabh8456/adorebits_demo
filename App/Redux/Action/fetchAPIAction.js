import { FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from './actionConst';
import * as Global from '../../Utils/Common/Global'

export function fetchDataFromAPI() {
    return async function (dispatch) {
        dispatch({ type: FETCH_DATA_LOADING })
        try {
            fetch(Global.BASE_URL, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("responseJson--->", responseJson);
                    if (responseJson.data.children.length > 0) {
                        dispatch({ type: FETCH_DATA_SUCCESS, data: responseJson.data.children })
                    } else {
                        dispatch({ type: FETCH_DATA_FAILED, message: responseJson.message })
                    }
                })
                .catch((error) => {
                    dispatch({ type: FETCH_DATA_FAILED, message: error })
                });
        } catch (error) {
            dispatch({ type: FETCH_DATA_FAILED, message: error })
        }
    }
}

